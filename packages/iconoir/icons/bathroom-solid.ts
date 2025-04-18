import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBathroomSolidIcon],svg[iconoir-bathroom-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M21 13v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2.4a.6.6 0 0 1 .6-.6z"></svg:path><svg:path d="m16 20l1 2m-9-2l-1 2m14-9V7a4 4 0 0 0-4-4h-5"></svg:path><svg:path fill="currentColor" d="M15.4 8H8.6c-.331 0-.596-.268-.56-.598C8.186 6.075 8.863 3 12 3s3.814 3.075 3.96 4.402c.036.33-.229.598-.56.598"></svg:path></svg:g>`,
})
export class IconoirBathroomSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
