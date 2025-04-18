import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBritishPoundIcon],svg[cil-british-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M375.942 160a88.042 88.042 0 0 0-176.033 3.024v76.588H136v32h63.909v120.3H136v32h240v-32H231.909v-120.3H344v-32H231.909v-76.588a56.046 56.046 0 0 1 112.091 0V168h32v-8Z"></svg:path>`,
})
export class CilBritishPoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
