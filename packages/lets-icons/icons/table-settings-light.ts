import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTableSettingsLightIcon],svg[lets-icons-table-settings-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 18.5h-6a2 2 0 0 1-2-2v-8m0 0v-2a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v1.85a.15.15 0 0 1-.15.15zm0 5h6"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" d="M13.649 16.167c-.237-.426-.355-.639-.402-.865a1.5 1.5 0 0 1 0-.604c.047-.226.165-.439.402-.865l.323-.581l.342-.57c.25-.419.376-.628.548-.78a1.5 1.5 0 0 1 .524-.303c.218-.073.462-.077.949-.084l.665-.011l.665.01c.487.008.73.012.95.085a1.5 1.5 0 0 1 .523.302c.172.153.298.362.548.78l.342.571l.323.581c.237.426.355.639.402.864a1.5 1.5 0 0 1 0 .606c-.047.225-.165.438-.402.864l-.323.581l-.342.57c-.25.419-.376.628-.548.78a1.5 1.5 0 0 1-.524.303c-.218.073-.462.077-.949.084l-.665.011l-.665-.01c-.487-.008-.73-.012-.95-.085a1.5 1.5 0 0 1-.523-.302c-.172-.153-.298-.362-.548-.78l-.342-.571z"></svg:path><svg:circle cx="17" cy="15" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsTableSettingsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
