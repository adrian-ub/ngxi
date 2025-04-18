import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAmpersandsIcon],svg[mynaui-ampersands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 17.5C9.174 15.517 3 12 3.481 8.525c0-1.1.904-2.025 1.963-2.025s1.964.924 1.964 2.025c0 1.83-2.585 3.505-3.699 4.654c-.945.975-.945 2.605 0 3.58c.944.973 2.537.963 3.471 0L11 12.687M21 17.5c-1.826-1.983-8-5.5-7.519-8.975c0-1.1.904-2.025 1.963-2.025s1.964.924 1.964 2.025c0 1.83-2.585 3.505-3.699 4.654c-.945.975-.945 2.605 0 3.58c.944.973 2.537.963 3.471 0L21 12.687"></svg:path>`,
})
export class MynauiAmpersandsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
