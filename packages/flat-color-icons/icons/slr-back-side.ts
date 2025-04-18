import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsSlrBackSideIcon],svg[flat-color-icons-slr-back-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5E35B1" d="M40 10h-7.6l-2-3c-.4-.6-1-.9-1.7-.9h-9.6c-.7 0-1.3.3-1.7.9l-2 3H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="#F57C00" d="M11 16h20c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1V17c0-.6.4-1 1-1"></svg:path><svg:path fill="#942A09" d="M18.9 22L12 32h13.8z"></svg:path><svg:circle cx="27" cy="21" r="2" fill="#FFF9C4"></svg:circle><svg:path fill="#BF360C" d="m25.2 26l-4.8 6H30z"></svg:path><svg:g fill="#8667C4"><svg:path d="M34 10h6v-.8c0-.7-.5-1.2-1.2-1.2h-3.6c-.7 0-1.2.5-1.2 1.2z"></svg:path><svg:circle cx="38" cy="18" r="2"></svg:circle><svg:circle cx="38" cy="24" r="2"></svg:circle><svg:circle cx="38" cy="30" r="2"></svg:circle></svg:g>`,
})
export class FlatColorIconsSlrBackSideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
