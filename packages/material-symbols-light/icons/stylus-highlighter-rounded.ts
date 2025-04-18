import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStylusHighlighterRoundedIcon],svg[material-symbols-light-stylus-highlighter-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.48 15.308q-.347 0-.577-.23t-.23-.578V5.616q0-.672.472-1.144T9.29 4q.186 0 .363.04t.339.121l5.403 2.649q.423.211.669.603t.245.85V14.5q0 .348-.23.578t-.578.23zM6.145 20q-.423 0-.658-.335q-.236-.336-.1-.74l.087-.242q.162-.452.533-.721t.848-.27h10.292q.477 0 .848.27t.533.72l.087.243q.136.404-.1.74q-.235.335-.658.335z"></svg:path>`,
})
export class MaterialSymbolsLightStylusHighlighterRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
