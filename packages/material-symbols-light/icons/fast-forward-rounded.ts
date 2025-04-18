import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFastForwardRoundedIcon],svg[material-symbols-light-fast-forward-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.096 15.106V8.894q0-.373.243-.59q.242-.218.565-.218q.125 0 .237.025t.217.106l4.661 3.112q.187.13.27.295t.084.376t-.083.376t-.27.295l-4.662 3.112q-.106.08-.217.106q-.112.025-.237.025q-.323 0-.565-.218q-.243-.217-.243-.59m8.885 0V8.894q0-.373.242-.59q.243-.218.566-.218q.125 0 .236.025t.217.106l4.662 3.112q.187.13.27.295t.084.376t-.084.376q-.083.164-.27.295l-4.662 3.112q-.105.08-.217.106t-.236.025q-.323 0-.566-.218q-.242-.217-.242-.59"></svg:path>`,
})
export class MaterialSymbolsLightFastForwardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
