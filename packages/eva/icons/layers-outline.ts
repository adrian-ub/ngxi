import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaLayersOutlineIcon],svg[eva-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92l2.26-1.3a1 1 0 0 0 .5-.92a1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86a1 1 0 0 0 .5.92l2.26 1.3l-2.15.92a1 1 0 0 0-.61.86a1 1 0 0 0 .5.92l2.26 1.3l-2.15.92a1 1 0 0 0-.61.86a1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92a1 1 0 0 0-.61-.86l-2.15-.92l2.26-1.3a1 1 0 0 0 .5-.92m-9-6.26l5.76 2.45L12 10.85L6.24 7.54Zm-.5 7.78a1 1 0 0 0 1 0l3.57-2l1.69.72L12 14.85l-5.76-3.31l1.69-.72Zm6.26 2.67L12 18.85l-5.76-3.31l1.69-.72l3.57 2.05a1 1 0 0 0 1 0l3.57-2.05Z"></svg:path>`,
})
export class EvaLayersOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
