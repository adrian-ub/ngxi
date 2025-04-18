import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddPhotoAlternateSharpIcon],svg[material-symbols-light-add-photo-alternate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h9.308q-.346.573-.52 1.209T12.617 6.5q0 2.027 1.428 3.456t3.456 1.429q.656 0 1.292-.173t1.208-.52V20zm2.77-3.616h10.46L14 12.077l-3 3.789l-2-2.404zM17 9V7h-2V6h2V4h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightAddPhotoAlternateSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
