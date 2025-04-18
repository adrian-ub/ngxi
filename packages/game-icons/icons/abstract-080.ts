import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAbstract080Icon],svg[game-icons-abstract-080-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21v218.844h59.19V80.19h159.654V21zm251.157 0v59.19h159.8v159.654H491V21zm-163.032 88.125v293.75h293.75v-293.75zM256 167.875c48.64 0 88.125 39.485 88.125 88.125S304.64 344.125 256 344.125S167.875 304.64 167.875 256S207.36 167.875 256 167.875M21 272.156V491h218.844v-59.19H80.191V272.155zm410.957 0V431.81h-159.8V491H491V272.156z"></svg:path>`,
})
export class GameIconsAbstract080Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
