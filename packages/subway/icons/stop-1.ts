import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayStop1Icon],svg[subway-stop-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M465.5 0h-419C20.9 0 0 20.9 0 46.5v418.9C0 491.1 20.9 512 46.5 512h418.9c25.7 0 46.5-20.9 46.5-46.5v-419C512 20.9 491.1 0 465.5 0"></svg:path>`,
})
export class SubwayStop1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
