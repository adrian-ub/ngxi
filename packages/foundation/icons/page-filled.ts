import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPageFilledIcon],svg[foundation-page-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.455 36.16h25.95c.956 0 1.729-.774 1.729-1.73V8.48a1.73 1.73 0 0 0-1.729-1.73h-1.73L19.725 32.7v1.729a1.73 1.73 0 0 0 1.73 1.731"></svg:path><svg:path fill="currentColor" d="M78.545 6.75H60.821c-.806 0-1.476.553-1.669 1.298h-.061v36.551h-.002l.002.023a1.73 1.73 0 0 1-1.73 1.73l-.009-.001v.001H21.455c-.873 0-1.586.647-1.706 1.487h-.024V91.52c0 .956.774 1.73 1.73 1.73h57.09a1.73 1.73 0 0 0 1.73-1.73V8.48a1.73 1.73 0 0 0-1.73-1.73"></svg:path>`,
})
export class FoundationPageFilledIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
