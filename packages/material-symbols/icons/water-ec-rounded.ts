import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWaterEcRoundedIcon],svg[material-symbols-water-ec-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-3.425 0-5.712-2.35T4 13.8q0-1.55.7-3.1t1.75-2.975T8.725 5.05T11 2.875q.2-.2.463-.287T12 2.5t.538.088t.462.287q1.05.925 2.275 2.175t2.275 2.675T19.3 10.7t.7 3.1q0 3.5-2.287 5.85T12 22m-1-8v3.85q0 .375.363.475t.562-.2l3.55-5.35q.175-.25.038-.512T15.075 12H13V8.15q0-.375-.363-.475t-.562.2l-3.55 5.35q-.175.25-.038.513t.438.262z"></svg:path>`,
})
export class MaterialSymbolsWaterEcRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
