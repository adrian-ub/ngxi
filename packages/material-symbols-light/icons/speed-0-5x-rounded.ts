import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed05xRoundedIcon],svg[material-symbols-light-speed-0-5x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.616 12.714l-2.135 3.553q-.068.11-.17.172t-.225.061q-.272 0-.41-.236q-.137-.235.003-.468l2.398-3.988l-2.148-3.585q-.16-.252-.003-.487q.157-.236.429-.236q.123 0 .225.062q.102.061.17.17l1.885 3.15l1.884-3.15q.068-.109.17-.17t.225-.062q.272 0 .41.236q.137.235-.003.468l-2.148 3.565l2.398 4.008q.16.252.003.488q-.157.235-.429.235q-.123 0-.225-.061q-.102-.062-.17-.172zM9.885 16.5H7q-.213 0-.356-.144t-.144-.357t.144-.356T7 15.5h2.885q.269 0 .442-.173t.173-.442v-1.77q0-.269-.173-.442t-.442-.173H7q-.213 0-.356-.144T6.5 12V8q0-.213.144-.356T7 7.5h4q.213 0 .356.144t.144.357t-.144.356T11 8.5H7.5v3h2.385q.69 0 1.152.463t.463 1.153v1.769q0 .69-.462 1.153t-1.153.462m-5.386 0q-.212 0-.356-.144T4 15.999t.144-.356t.357-.143t.356.144t.143.357t-.144.356t-.357.143"></svg:path>`,
})
export class MaterialSymbolsLightSpeed05xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
