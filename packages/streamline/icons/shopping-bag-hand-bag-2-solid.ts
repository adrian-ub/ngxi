import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBagHandBag2SolidIcon],svg[streamline-shopping-bag-hand-bag-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.146 2.013A1.75 1.75 0 0 1 9.134 3.25v.663h-3.5V3.25c0-.464.184-.91.512-1.237m-2.012 1.9V3.25a3.25 3.25 0 0 1 6.5 0v.663h1.75a.5.5 0 0 1 .497.444l.847 7.596l.008.07c.022.163.057.431.003.69a1.52 1.52 0 0 1-1.073 1.146c-.245.068-.523.06-.692.056l-.09-.002h-9l-.09.002c-.17.004-.448.012-.692-.056c-.542-.15-.959-.6-1.073-1.146c-.054-.259-.02-.527.002-.69l.009-.07l.847-7.596a.5.5 0 0 1 .497-.444z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShoppingBagHandBag2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
