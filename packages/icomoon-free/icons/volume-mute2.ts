import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeVolumeMute2Icon],svg[icomoon-free-volume-mute2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9.674V11h-1.326L12 9.326L10.326 11H9V9.674L10.674 8L9 6.326V5h1.326L12 6.674L13.674 5H15v1.326L13.326 8zM6.5 15a.5.5 0 0 1-.354-.146L2.292 11H.499a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1.793l3.854-3.854A.499.499 0 0 1 7 1.5v13a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class IcomoonFreeVolumeMute2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
