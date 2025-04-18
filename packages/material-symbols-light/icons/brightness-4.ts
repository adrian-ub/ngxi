import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBrightness4Icon],svg[material-symbols-light-brightness-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 16.23q1.757 0 2.994-1.237T16.762 12t-1.238-2.993t-2.993-1.238q-.458 0-.894.103q-.437.103-.86.29q1.137.527 1.8 1.56q.664 1.034.664 2.278t-.664 2.278t-1.8 1.56q.423.187.86.29q.436.103.894.103M12 21.916L9.069 19H5v-4.069L2.085 12L5 9.069V5h4.069L12 2.085L14.931 5H19v4.069L21.916 12L19 14.931V19h-4.069z"></svg:path>`,
})
export class MaterialSymbolsLightBrightness4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
