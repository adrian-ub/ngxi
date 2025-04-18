import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOnesiesIcon],svg[icon-park-onesies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 21L4 11C5.83333 9.66667 13 5 24 5C35 5 42 9.66667 44 11L41 21H34V37C34 41 31 44 27 44H21C17 44 14 41 14 37V21H7Z"></svg:path><svg:path stroke="#fff" d="M34 34C34 34 25 34 25 44"></svg:path><svg:path stroke="#fff" d="M14 34C14 34 23 34 23 44"></svg:path><svg:path stroke="#fff" d="M29.811 5.5C29.9344 5.97943 30 6.48205 30 7C30 10.3137 27.3137 13 24 13C20.6863 13 18 10.3137 18 7C18 6.48205 18.0656 5.97943 18.189 5.5"></svg:path><svg:path stroke="#000" d="M35.9997 6.98996C32.8112 5.88268 28.7837 5 23.9997 5C19.2157 5 15.1568 5.88268 11.9463 6.98996"></svg:path><svg:path stroke="#000" d="M14 31C14 31 14 35.875 14 37"></svg:path><svg:path stroke="#000" d="M34 31C34 31 34 35.875 34 37"></svg:path><svg:path stroke="#000" d="M21 44C25 44 24 44 27 44"></svg:path></svg:g>`,
})
export class IconParkOnesiesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
