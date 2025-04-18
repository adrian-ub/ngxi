import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderLottieIcon],svg[material-icon-theme-folder-lottie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfa5" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#a7ffeb" d="M28 10H18a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4m0 5.563a.48.48 0 0 1-.437.464c-1.541.201-2.457 1.49-3.715 3.503c-1.233 1.971-2.619 4.19-5.323 4.446a.495.495 0 0 1-.525-.501v-1.038a.48.48 0 0 1 .437-.465c1.541-.2 2.457-1.489 3.715-3.502c1.233-1.971 2.619-4.19 5.323-4.446a.495.495 0 0 1 .525.501Z"></svg:path>`,
})
export class MaterialIconThemeFolderLottieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
