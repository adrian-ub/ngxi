import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCapitolIcon],svg[game-icons-capitol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.594 19.406l-15.78 59.125c5.184-.58 10.44-.874 15.78-.874c5.338 0 10.595.293 15.78.875l-15.78-59.124zm0 76.97c-57.894 0-106.156 40.154-118.656 94.186H374.25c-12.5-54.032-60.762-94.187-118.656-94.187zM19.406 209.25v33.53h472.406v-33.53zM71.5 261.47v159.124h50.406V261.47zm105.97 0v159.124h50.405V261.47zm105.936 0v159.124h50.406V261.47zm105.938 0v159.124h50.406V261.47zm-161.78 177.655l-31.658 56.656h120.5l-32.062-56.655zm-208.158.156v33.533h167.938l18.72-33.532H19.405zm286.531 0l18.97 33.533h166.906V439.28H305.938z"></svg:path>`,
})
export class GameIconsCapitolIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
