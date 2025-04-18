import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatHorizontalTrafficLightIcon],svg[fluent-emoji-flat-horizontal-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1C1C1C" d="M2 14.999c0-3.31 2.693-6 6.006-6h15.988a6.01 6.01 0 0 1 6.006 6c0 3.31-2.693 6-6.006 6H8.006a6.01 6.01 0 0 1-6.006-6"></svg:path><svg:path fill="#F8312F" d="M24 17.999a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill="#FFB02E" d="M16 17.999a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill="#00D26A" d="M8 17.999a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill="#FF8687" d="M25 14.999a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="#FCD53F" d="M17 14.999a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="#00F397" d="M9 14.999a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="#636363" d="M4.349 13.363c-.14.312.11.636.452.636a.59.59 0 0 0 .514-.34a3 3 0 0 1 5.37 0c.099.198.292.34.514.34c.342 0 .592-.324.452-.636a4 4 0 0 0-7.302 0m8 0c-.14.312.11.636.452.636a.59.59 0 0 0 .514-.34a3 3 0 0 1 5.37 0c.099.198.293.34.514.34c.342 0 .592-.324.452-.636a4 4 0 0 0-7.302 0m8.451.636c-.341 0-.591-.324-.451-.636a4 4 0 0 1 7.302 0c.14.312-.11.636-.452.636a.59.59 0 0 1-.514-.34a3 3 0 0 0-5.37 0a.59.59 0 0 1-.514.34"></svg:path></svg:g>`,
})
export class FluentEmojiFlatHorizontalTrafficLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
