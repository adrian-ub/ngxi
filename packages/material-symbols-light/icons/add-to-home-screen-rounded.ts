import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddToHomeScreenRoundedIcon],svg[material-symbols-light-add-to-home-screen-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 10.208l-5.746 5.746q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L9.792 9.5H6q-.213 0-.356-.144T5.5 8.999t.144-.356T6 8.5h4.692q.344 0 .576.232t.232.576V14q0 .213-.144.356t-.357.144t-.356-.144T10.5 14zM8.616 22q-.667 0-1.141-.475T7 20.386v-2.808q0-.213.144-.356t.357-.144t.356.144t.143.356v.923h10v-13H8v.923q0 .213-.144.356t-.357.144t-.356-.144T7 6.423V3.616q0-.667.475-1.142T8.615 2h8.77q.666 0 1.14.475T19 3.614v16.77q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightAddToHomeScreenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
