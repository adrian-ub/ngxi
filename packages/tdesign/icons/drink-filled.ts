import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDrinkFilledIcon],svg[tdesign-drink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1h-5.52l-1.235 4.222h-2.904c-.457-1.829-2.137-3.166-4.11-3.166C3.914 2.056 2 3.902 2 6.222c0 2.018 1.475 3.642 3.349 4.056L6.217 23h12.64L20.07 5.222h-4.74L15.979 3H20zM7.38 10.704l-.236-3.482h5.515l-1.213 4.143zm10.55-3.482l-.352 5.157l-4.141-.687l1.308-4.47z"></svg:path>`,
})
export class TdesignDrinkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
