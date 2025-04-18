import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKingBedIcon],svg[material-symbols-light-king-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.77 18h-.54l-.38-2H3v-3.39q0-.671.472-1.14q.472-.47 1.144-.47H5V8.615q0-.67.472-1.143Q5.944 7 6.616 7h10.769q.67 0 1.143.472q.472.472.472 1.143V11h.385q.67 0 1.143.472q.472.472.472 1.144V16h-.85l-.38 2h-.54l-.38-2H5.15zm7.73-7H18V8.615q0-.269-.173-.442T17.385 8H12.5zM6 11h5.5V8H6.616q-.27 0-.443.173T6 8.615z"></svg:path>`,
})
export class MaterialSymbolsLightKingBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
