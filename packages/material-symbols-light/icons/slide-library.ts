import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSlideLibraryIcon],svg[material-symbols-light-slide-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.672 0-1.144-.472T3 17.385v-10h1v10q0 .269.173.442t.443.173H18v1zm3-3q-.672 0-1.144-.472T6 14.385v-7.77q0-.67.472-1.143Q6.944 5 7.616 5h6.938l-1 1H7.616q-.27 0-.443.173T7 6.616v7.769q0 .269.173.442t.443.173h11.769q.269 0 .442-.173t.173-.442V8.446l1-1v6.939q0 .67-.472 1.143q-.472.472-1.143.472zm5.365-4.327q-.383 0-.718-.147q-.336-.147-.57-.449q.309 0 .568-.153t.258-.443q0-.375.265-.63q.264-.255.639-.255q.356 0 .62.264q.265.265.265.62q0 .518-.395.855t-.932.338m2.371-1.98l-1.063-1.064l4.369-4.345q.13-.13.292-.13t.292.13l.473.474q.131.13.131.292t-.13.292z"></svg:path>`,
})
export class MaterialSymbolsLightSlideLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
