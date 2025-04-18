import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBroadcastOnHomeSharpIcon],svg[material-symbols-light-broadcast-on-home-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7.467q-.238-.157-.479-.294q-.24-.136-.521-.246V4H5V3h16zM3 17V7.616h5.539V17zm13.558 2.77v-4.943q-.225-.123-.363-.347t-.137-.48q0-.396.281-.669t.657-.273q.395 0 .67.273q.276.273.276.669q0 .256-.122.473q-.122.218-.378.354v4.942zm-3.754-1.247q-.952-.892-1.474-2.073T10.808 14q0-2.596 1.808-4.394q1.81-1.798 4.38-1.798q2.595 0 4.395 1.798q1.801 1.798 1.801 4.394q0 1.275-.503 2.463q-.504 1.187-1.487 2.035l-.594-.614q.84-.744 1.27-1.762t.43-2.122q0-2.23-1.541-3.769t-3.772-1.539q-2.204 0-3.754 1.54Q11.692 11.77 11.692 14q0 1.11.446 2.128q.445 1.018 1.28 1.782zm1.755-1.775q-.568-.556-.91-1.262q-.341-.707-.341-1.486q0-1.546 1.083-2.62q1.083-1.072 2.605-1.072q1.545 0 2.62 1.073T20.692 14q0 .794-.326 1.51q-.325.715-.92 1.251l-.633-.627q.466-.407.73-.962q.265-.555.265-1.172q0-1.18-.815-1.993T17 11.192q-1.165 0-1.986.815q-.822.814-.822 1.993q0 .61.277 1.159t.723.956z"></svg:path>`,
})
export class MaterialSymbolsLightBroadcastOnHomeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
