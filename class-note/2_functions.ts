// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
    return a + b;
}

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function plus(a: number, b: number): number {
    return a + b;
}

plus(10, 20); // 30
// plus(10, 20, 30, 40); 시 2개의 인수가 필요한데 4개를 가져왔다고 알려줌.

// 함수의 옵셔널 파라미터(?)
function log(a: string, b?: string) {

}

log('hello World');
log('hello ts', 'abc');