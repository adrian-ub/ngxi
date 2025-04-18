import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepOverIcon],svg[material-symbols-step-over-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19q-1.25 0-2.125-.875T9 16t.875-2.125T12 13t2.125.875T15 16t-.875 2.125T12 19m-7.925-7q.35-2.975 2.6-4.988T11.975 5q1.825 0 3.375.738T18 7.75V5h2v7h-7v-2h4.2q-.8-1.35-2.162-2.175T12 7Q9.8 7 8.125 8.425T6.1 12z"></svg:path>`,
})
export class MaterialSymbolsStepOverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
