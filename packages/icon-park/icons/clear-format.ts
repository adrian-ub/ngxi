import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClearFormatIcon],svg[icon-park-clear-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-width="4.302" d="M44.7818 24.1702L31.918 7.09935L14.1348 20.5L27.5 37L30.8556 34.6643L44.7818 24.1702Z"></svg:path><svg:path stroke-linejoin="round" stroke-width="4.302" d="M27.4998 37L23.6613 40.0748L13.0978 40.074L10.4973 36.6231L4.06543 28.0876L14.4998 20.2248"></svg:path><svg:path stroke-linecap="round" stroke-width="4.5" d="M13.2056 40.072L44.5653 40.072"></svg:path></svg:g>`,
})
export class IconParkClearFormatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
