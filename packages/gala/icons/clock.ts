import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaClockIcon],svg[gala-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 80.039519,211.06969 64.056987,239.90745"></svg:path><svg:path d="m 175.96058,211.06969 15.98254,28.83776"></svg:path><svg:circle cx="128" cy="128.007" r="95.915"></svg:circle><svg:path d="M 35.294352,102.43866 A 47.957299,47.957299 0 0 1 17.212686,53.792007 47.957299,47.957299 0 0 1 53.990946,17.175027 47.957299,47.957299 0 0 1 102.55767,35.470309"></svg:path><svg:path d="m 127.99967,32.092482 3.8e-4,-15.985761"></svg:path><svg:path d="M 128.00005,80.049788 V 128.00708"></svg:path><svg:path d="m 128.00005,128.00708 33.91093,33.91093"></svg:path><svg:path d="M 220.70575,102.43866 A 47.957299,47.957299 0 0 0 238.78742,53.792007 47.957299,47.957299 0 0 0 202.00916,17.175027 47.957299,47.957299 0 0 0 153.44244,35.470309"></svg:path></svg:g>`,
})
export class GalaClockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
