import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceRampUpArrowIcon],svg[guidance-ramp-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M23 23H1v-1c14-3.228 21.5-9 21.5-9h.5zM13 8.247L.5 15.5M13 8.246c-.498.29-.944.95-1.274 1.559a8 8 0 0 0-.856 2.622c-.106.712-.155 1.514.068 1.902M13 8.246c-.498.29-1.29.348-1.98.33a7.9 7.9 0 0 1-2.687-.566C7.666 7.747 6.95 7.388 6.728 7"></svg:path>`,
})
export class GuidanceRampUpArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
