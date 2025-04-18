import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleThinIcon],svg[ph-ladder-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 28a4 4 0 0 0-4 4v36H68V32a4 4 0 0 0-8 0v192a4 4 0 0 0 8 0v-36h120v36a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4m-4 48v48H68V76ZM68 180v-48h120v48Z"></svg:path>`,
})
export class PhLadderSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
