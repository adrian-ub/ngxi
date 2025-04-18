import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVariableInsertRoundedIcon],svg[material-symbols-light-variable-insert-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.808 16q-.343 0-.576-.23T4 15.2V8.8q0-.34.232-.57T4.808 8h14.384q.344 0 .576.23t.232.569v1.595q0 .339-.232.569t-.576.23h-3q-.666 0-1.14.474t-.475 1.14v2.395q0 .339-.232.569t-.576.229zm13.154-.71V18q0 .213-.144.356q-.144.144-.357.144t-.356-.144t-.143-.356v-3.619q0-.342.23-.573q.232-.231.574-.231h3.619q.212 0 .356.144t.144.357t-.144.356t-.356.143h-2.716l3.362 3.394q.146.141.146.335t-.146.34t-.347.146t-.348-.146z"></svg:path>`,
})
export class MaterialSymbolsLightVariableInsertRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
