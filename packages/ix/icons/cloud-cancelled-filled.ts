import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudCancelledFilledIcon],svg[ix-cloud-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m181.783 151.35l-81.6-81.674l-30.17 30.17l54.816 54.848c-47.618 14.942-82.162 59.422-82.162 111.971c0 61.208 46.868 111.47 106.675 116.855l-.009.478l204.608-.018l57.655 57.703l30.17-30.17l-31.59-31.608l.045-.011l-38.53-38.563l-.086-.018L231.531 201.11l.021-.024l-49.642-49.712zm223.55 61.981c0-58.91-47.756-106.666-106.666-106.666c-28.065 0-53.599 10.838-72.634 28.558L446.966 356.26c13.892-15.179 22.367-35.397 22.367-57.595c0-39.779-27.218-73.201-64.033-82.65z"></svg:path>`,
})
export class IxCloudCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
