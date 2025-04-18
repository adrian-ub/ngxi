import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsForestryIcon],svg[simple-icons-forestry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.564.332v2.82L0 8.736l1.305 1.284l4.26-4.26v2.568L0 13.912l1.305 1.283l4.26-4.26v12.733h1.831V10.932l4.284 4.263l1.304-1.283l-5.588-5.588V5.756l3.989 3.969l5.195 5.214v8.729h1.832v-8.725L24 9.355l-1.305-1.283l-4.283 4.264V9.768L24 4.18l-1.305-1.284l-4.283 4.264V.332H16.58v6.824l-4.26-4.26l-1.304 1.284l5.564 5.584v2.568l-3.596-3.596l-5.588-5.588V.332H5.564z"></svg:path>`,
})
export class SimpleIconsForestryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
