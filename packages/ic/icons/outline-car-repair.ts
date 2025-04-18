import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineCarRepairIcon],svg[ic-outline-car-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="10.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="10.5" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M5.78 16h.44c.43 0 .78-.36.78-.81V14h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5L17.44 4c-.05-.16-.12-.29-.19-.4c-.02-.02-.03-.04-.05-.07c-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06c-.07.11-.14.24-.19.4L5 8.69v6.5c0 .45.35.81.78.81M8.33 5h7.34l.23.69l.43 1.31H7.67zM7 9.01V9h10v3H7zm-3 8V19h7v3h2v-3h7v-1.99z"></svg:path>`,
})
export class IcOutlineCarRepairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
