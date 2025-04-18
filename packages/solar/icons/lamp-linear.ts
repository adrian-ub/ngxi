import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLampLinearIcon],svg[solar-lamp-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6m-3 0v-7"></svg:path><svg:path d="M4.962 7.445c.609-2.346.913-3.519 1.7-4.294a4 4 0 0 1 .756-.585C8.365 2 9.577 2 12 2s3.635 0 4.583.566a4 4 0 0 1 .756.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.828 3.189 1.242 4.783.49 5.903a3 3 0 0 1-.247.319C18.471 15 16.824 15 13.53 15h-3.058c-3.294 0-4.942 0-5.837-1.01q-.134-.15-.246-.318c-.752-1.12-.338-2.714.49-5.903z"></svg:path><svg:path stroke-linecap="round" d="M17.5 15v2"></svg:path></svg:g>`,
})
export class SolarLampLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
