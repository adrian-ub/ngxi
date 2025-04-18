import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRepeatOnIcon],svg[material-symbols-light-repeat-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.421 0-.71-.29Q2 21.422 2 21V3q0-.421.29-.71Q2.579 2 3 2h18q.421 0 .71.29q.29.289.29.71v18q0 .421-.29.71q-.289.29-.71.29zm4.308-1l.708-.72l-2.089-2.088h12.38v-5h-1v4H5.928l2.089-2.088l-.708-.72L4 17.693zM5.692 10.808h1v-4h11.381l-2.089 2.088l.708.72L20 6.307L16.692 3l-.707.72l2.088 2.088H5.693z"></svg:path>`,
})
export class MaterialSymbolsLightRepeatOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
