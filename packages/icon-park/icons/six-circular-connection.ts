import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSixCircularConnectionIcon],svg[icon-park-six-circular-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37.8564 20V24V28"></svg:path><svg:path d="M27.4639 38L30.928 36L34.3921 34"></svg:path><svg:path d="M20.5356 38L17.0715 36L13.6074 34"></svg:path><svg:path d="M10.1436 20V24V28"></svg:path><svg:path d="M13.6074 14L17.0715 12L20.5356 10"></svg:path><svg:path d="M27.4639 10L30.928 12L34.3921 14"></svg:path><svg:path fill="#2F88FF" d="M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"></svg:path><svg:path fill="#2F88FF" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path><svg:path fill="#2F88FF" d="M38 20C40.2091 20 42 18.2091 42 16C42 13.7909 40.2091 12 38 12C35.7909 12 34 13.7909 34 16C34 18.2091 35.7909 20 38 20Z"></svg:path><svg:path fill="#2F88FF" d="M38 36C40.2091 36 42 34.2091 42 32C42 29.7909 40.2091 28 38 28C35.7909 28 34 29.7909 34 32C34 34.2091 35.7909 36 38 36Z"></svg:path><svg:path fill="#2F88FF" d="M10 20C12.2091 20 14 18.2091 14 16C14 13.7909 12.2091 12 10 12C7.79086 12 6 13.7909 6 16C6 18.2091 7.79086 20 10 20Z"></svg:path><svg:path fill="#2F88FF" d="M10 36C12.2091 36 14 34.2091 14 32C14 29.7909 12.2091 28 10 28C7.79086 28 6 29.7909 6 32C6 34.2091 7.79086 36 10 36Z"></svg:path></svg:g>`,
})
export class IconParkSixCircularConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
