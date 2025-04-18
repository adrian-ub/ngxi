import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationMapIcon],svg[foundation-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M91.967 7.961c0-.016.005-.031.005-.047a2.733 2.733 0 0 0-2.73-2.733H39.559v.011L8.031 36.721h-.003v55.365h.003v.001a2.735 2.735 0 0 0 2.734 2.731h78.479a2.73 2.73 0 0 0 2.663-2.15h.06v-.536l.004-.044c.002-.022-.004-.029-.004-.044zm-24.328 7.177H82.01v24.597L63.897 21.621zM39.57 39.453a2.73 2.73 0 0 0 2.722-2.73V15.138H61.88l-27.17 47.06l-16.725-16.725v-6.02zM17.985 84.862V52.527L32.128 66.67L21.626 84.862zm9.4 0l33.93-58.769l20.696 20.696v38.073z"></svg:path><svg:path fill="currentColor" d="M62.03 45.576c-6.645 0-12.026 5.387-12.026 12.027c0 2.659.873 5.109 2.334 7.1l7.759 13.439q.069.142.157.271l.016.027l.004-.002a2.16 2.16 0 0 0 3.405.132l.02.011l.075-.129a2.3 2.3 0 0 0 .287-.497l7.608-13.178a11.96 11.96 0 0 0 2.39-7.175c-.003-6.639-5.384-12.026-12.029-12.026M61.911 63.7a5.924 5.924 0 0 1-5.926-5.925a5.926 5.926 0 1 1 5.926 5.925"></svg:path>`,
})
export class FoundationMapIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
