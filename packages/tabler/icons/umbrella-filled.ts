import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaFilledIcon],svg[tabler-umbrella-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 1 9 9a1 1 0 0 1-.883.993L20 13h-7v5a1 1 0 0 0 1.993.117L15 18a1 1 0 0 1 2 0a3 3 0 0 1-5.995.176L11 18v-5H4a1 1 0 0 1-.993-.883L3 12a9 9 0 0 1 9-9"></svg:path>`,
})
export class TablerUmbrellaFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
