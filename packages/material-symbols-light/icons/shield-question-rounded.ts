import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShieldQuestionRoundedIcon],svg[material-symbols-light-shield-question-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963m-.039-4.423q.272 0 .469-.198q.197-.197.197-.468t-.197-.468t-.469-.197t-.468.197t-.197.468t.197.468t.468.197m.064-2.888q.166 0 .297-.129q.132-.129.151-.294q.044-.175.104-.328t.16-.283q.155-.212.33-.402q.174-.191.354-.372q.425-.444.757-.96q.332-.515.332-1.14q0-.97-.738-1.606q-.737-.636-1.733-.636q-.723 0-1.341.337q-.617.336-.998.934q-.092.16-.028.329q.065.17.23.237q.16.067.329.006t.292-.209q.264-.37.657-.566t.859-.195q.627 0 1.106.383t.48.998q0 .483-.282.893t-.645.75q-.237.216-.444.45t-.389.52q-.125.2-.213.392q-.089.193-.089.424q0 .19.136.329t.326.138"></svg:path>`,
})
export class MaterialSymbolsLightShieldQuestionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
