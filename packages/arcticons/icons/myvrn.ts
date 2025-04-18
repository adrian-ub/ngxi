import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyvrnIcon],svg[arcticons-myvrn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.903 24l4.798-8.636h9.595L15.498 24l4.798 8.636h-9.595Zm21.801 18.5h9.595l4.798-8.636l-4.798-8.636l-4.797 8.636h-9.596Zm4.798-28.364l4.797 8.636l4.798-8.636L37.299 5.5h-9.595l-4.798 8.636Z"></svg:path>`,
})
export class ArcticonsMyvrnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
