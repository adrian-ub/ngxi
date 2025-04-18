import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epPictureIcon],svg[ep-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 160v704h704V160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32"></svg:path><svg:path fill="currentColor" d="M384 288q64 0 64 64t-64 64t-64-64t64-64M185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472l122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888l49.92 39.936l-215.808 269.824l-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072l-.64-.512a32 32 0 0 0-44.8 5.952z"></svg:path>`,
})
export class EpPictureIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
