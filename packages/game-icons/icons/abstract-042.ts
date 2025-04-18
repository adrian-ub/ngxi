import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAbstract042Icon],svg[game-icons-abstract-042-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21v224.572h179.481v20.856H21V491h111.184V370.27h247.632V491H491V266.43H311.519v-20.857H491V21H379.816v120.731H132.184V21zm139.237 0v90.034h191.379V21zm0 379.966V491h191.379v-90.034z"></svg:path>`,
})
export class GameIconsAbstract042Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
