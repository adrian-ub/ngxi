import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRviapayIcon],svg[arcticons-rviapay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 15.99a2.18 2.18 0 0 1 2.172-2.176h0m-2.172-.001v5.768m8.348-5.767l-2.173 5.767l-2.172-5.767m6.502-.001v5.768m6.501-2.176a2.18 2.18 0 0 1-2.172 2.176h0a2.18 2.18 0 0 1-2.172-2.176V15.99a2.18 2.18 0 0 1 2.172-2.176h0a2.18 2.18 0 0 1 2.172 2.176m0 3.591v-5.768m.011 15.172a3.52 3.52 0 0 1-3.512 3.512h0a3.52 3.52 0 0 1-3.511-3.512v-2.283a3.52 3.52 0 0 1 3.511-3.512h0a3.52 3.52 0 0 1 3.512 3.512m0 5.795V23.19m6.647 9.307l-3.687-9.307m7.023 0l-4.39 12.644c-.35.878-1.053 1.405-1.93 1.405h-.527M10.51 28.985a3.52 3.52 0 0 0 3.512 3.512h0a3.52 3.52 0 0 0 3.511-3.512v-2.283a3.52 3.52 0 0 0-3.511-3.512h0a3.52 3.52 0 0 0-3.511 3.512m0-3.512v14.049m10.494-25.933l1.52-.545"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsRviapayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
