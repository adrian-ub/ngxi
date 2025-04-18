import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPan03Icon],svg[hugeicons-pan-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20v-1.5m4 1.5v-1.5m4 1.5v-1.5M10 20h12m-.444-9H10.444c-.245 0-.444.249-.444.556C10 14.01 11.592 16 13.556 16h4.888C20.408 16 22 14.01 22 11.556c0-.307-.199-.556-.444-.556M13 8c1.652-1.022-.652-2.978 1-4m2 4c1.652-1.022-.652-2.978 1-4m2 4c1.652-1.022-.652-2.978 1-4m-10 7L8 9M3.368 4.368c.49-.49 1.286-.49 1.777 0l2.487 2.487a1.256 1.256 0 1 1-1.777 1.777L3.368 6.145a1.256 1.256 0 0 1 0-1.777" color="currentColor"></svg:path>`,
})
export class HugeiconsPan03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
