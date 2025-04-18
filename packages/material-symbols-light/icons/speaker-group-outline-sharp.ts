import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeakerGroupOutlineSharpIcon],svg[material-symbols-light-speaker-group-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h10V3H9zm-1 1V2h12v17zm6.002-11.692q.546 0 .926-.383q.38-.382.38-.927t-.382-.926t-.928-.38t-.926.382t-.38.928t.382.926t.928.38M14 16.077q1.258 0 2.129-.871T17 13.077t-.871-2.129T14 10.077t-2.129.871T11 13.077t.871 2.129t2.129.871m0-1q-.817 0-1.409-.591Q12 13.894 12 13.077t.591-1.409q.592-.591 1.409-.591t1.409.591q.591.592.591 1.409t-.591 1.409t-1.409.591M15 22H5V6h1v15h9zM9 3v15z"></svg:path>`,
})
export class MaterialSymbolsLightSpeakerGroupOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
