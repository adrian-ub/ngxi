import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAirConditionerIcon],svg[mynaui-air-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.346 4.5H5.654c-.629 0-1.154.525-1.154 1.154v5.77c0 .628.525 1.153 1.154 1.153h12.692c.629 0 1.154-.525 1.154-1.154v-5.77c0-.628-.525-1.153-1.154-1.153"></svg:path><svg:path d="M16.615 12.577v-2.308c0-.628-.525-1.154-1.153-1.154H8.537c-.628 0-1.153.526-1.153 1.154v2.308m-.577 5.77c1.64 0 1.73-1.604 1.73-2.886m8.654 2.885c-1.64 0-1.73-1.603-1.73-2.885M12 19.5v-4.039"></svg:path></svg:g>`,
})
export class MynauiAirConditionerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
