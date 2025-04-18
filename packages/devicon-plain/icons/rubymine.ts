import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainRubymineIcon],svg[devicon-plain-rubymine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m41.717 5.486l-5.07 12.772l-32.38 7.953l.05 61.44l24.624 34.865l23.907-3.036l.109-.011l.023-.002l43.739-5.826l-6.535-12.569H26.93V26.93h74.142v65.724l7.606.067l12.617-64.366l-19.7-22.869L68.108 17.48zM27.93 27.93v72.142h72.142V27.93zm35.716 8.603h6.522l7.228 11.631l7.231-11.63h6.521v27.49h-6.01V46.08l-7.742 11.738h-.158l-7.656-11.617v17.822h-5.936zm-27.076.037h12.557q5.217 0 7.996 2.78a8.53 8.53 0 0 1 2.354 6.279v.084a8.53 8.53 0 0 1-1.633 5.426a9.44 9.44 0 0 1-4.254 3.084l6.717 9.752h-7.07l-5.694-8.422h-4.986v8.435H36.57zm6.01 5.366v7.886l6.182.05a5.02 5.02 0 0 0 3.377-1.11a3.66 3.66 0 0 0 1.218-2.828v-.073a3.47 3.47 0 0 0-1.218-2.937a5.52 5.52 0 0 0-3.487-.988zm-6.033 44.81h27.43v4.572h-27.43z"></svg:path>`,
})
export class DeviconPlainRubymineIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
