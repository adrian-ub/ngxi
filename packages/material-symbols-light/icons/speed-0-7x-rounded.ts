import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed07xRoundedIcon],svg[material-symbols-light-speed-0-7x-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.616 12.714l-2.135 3.553q-.068.11-.17.172t-.225.061q-.272 0-.41-.236q-.137-.235.003-.468l2.398-3.988l-2.148-3.585q-.16-.252-.003-.487q.157-.236.429-.236q.123 0 .225.062q.102.061.17.17l1.885 3.15l1.884-3.15q.068-.109.17-.17t.225-.062q.272 0 .41.236q.137.235-.003.468l-2.148 3.565l2.398 4.008q.16.252.003.488q-.157.235-.429.235q-.123 0-.225-.061q-.102-.062-.17-.172zM8.92 16.5q-.241 0-.397-.192t-.089-.431L10.27 8.5H6.808q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h3.558q.378 0 .66.268t.282.648q0 .25-.07.43l-1.832 7.275q-.056.171-.183.275q-.126.104-.303.104m-3.42 0q-.213 0-.357-.144T5 15.999t.144-.356t.357-.143t.356.144t.143.357t-.144.356t-.357.143"></svg:path>`,
})
export class MaterialSymbolsLightSpeed07xRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
