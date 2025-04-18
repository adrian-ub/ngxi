import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDogBowlIcon],svg[tabler-dog-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10 15l5.586-5.585A2 2 0 1 1 19 8a2 2 0 1 1-1.413 3.414L14 15"></svg:path><svg:path d="M12 13L8.414 9.415A2 2 0 1 0 5 8a2 2 0 1 0 1.413 3.414L10 15m-7 5h18c-.175-1.671-.046-3.345-2-5H5q-2 1.5-2 5"></svg:path></svg:g>`,
})
export class TablerDogBowlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
