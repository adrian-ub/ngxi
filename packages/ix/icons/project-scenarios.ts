import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixProjectScenariosIcon],svg[ix-project-scenarios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m213.334 42.667l170.666 96V256h-42.667v-74.586l-106.667 61.584v122.687l21.334-12v48.982l-42.666 24l-170.667-96v-192zM85.333 182.58v123.127L192 365.689V244.164zm128-90.953l-101.42 57.031l100.41 57.972l101.392-58.538zm64 185.707H448V320H277.334Zm0 64H448V384H277.334Zm0 64H448V448H277.334Z"></svg:path>`,
})
export class IxProjectScenariosIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
