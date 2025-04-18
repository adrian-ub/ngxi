import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsLineweightIcon],svg[system-uicons-lineweight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor"><svg:rect width="14" height="2" x="3.5" y="6.5" fill="currentColor" rx="1"></svg:rect><svg:path fill="currentColor" d="M3.5 11.5h14v1h-14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.5 15.5h13.981"></svg:path></svg:g>`,
})
export class SystemUiconsLineweightIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
