import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsQuickReorderRoundedIcon],svg[material-symbols-quick-reorder-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20q-.425 0-.712-.288T1 19t.288-.712T2 18h4v-2H3q-.425 0-.712-.288T2 15t.288-.712T3 14h3v-2H4.05q-.425 0-.712-.288T3.05 11t.288-.712T4.05 10H6V7.05l-1.525-3.3q-.175-.375-.038-.762t.513-.563t.763-.037t.562.512L8.2 7h11.6l-1.525-3.25q-.175-.375-.037-.762t.512-.563t.763-.037t.562.512L21.8 6.6q.1.2.15.413t.05.437V18q0 .825-.587 1.413T20 20zm10-7h4q.425 0 .713-.288T17 12t-.288-.712T16 11h-4q-.425 0-.712.288T11 12t.288.713T12 13"></svg:path>`,
})
export class MaterialSymbolsQuickReorderRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
