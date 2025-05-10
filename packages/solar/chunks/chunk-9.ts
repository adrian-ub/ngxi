import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlain3BoldIcon],svg[solar-plain-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.352 10.52l-1.716 5.15c-1.21 3.63-1.816 5.446-2.703 5.962c-.844.49-1.887.49-2.73 0c-.888-.516-1.493-2.331-2.703-5.962c-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454c-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364l5.15-1.716c4.498-1.5 6.747-2.25 7.934-1.062s.438 3.436-1.062 7.935m-7.306.382a.75.75 0 0 1 .006-1.06l4.21-4.165a.75.75 0 1 1 1.055 1.067l-4.21 4.164a.75.75 0 0 1-1.061-.006" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlain3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain3BoldDuotoneIcon],svg[solar-plain-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.352 10.52l-1.716 5.15c-1.21 3.63-1.816 5.446-2.703 5.962c-.844.49-1.887.49-2.73 0c-.888-.516-1.493-2.331-2.703-5.962c-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454c-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364l5.15-1.716c4.498-1.5 6.747-2.25 7.934-1.062s.438 3.436-1.062 7.935" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.046 10.902a.75.75 0 0 1 .006-1.06l4.21-4.164a.75.75 0 0 1 1.055 1.066l-4.21 4.164a.75.75 0 0 1-1.061-.006"></svg:path>`,
})
export class SolarPlain3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain3BrokenIcon],svg[solar-plain-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.636 15.67c-1.21 3.63-1.816 5.446-2.703 5.962c-.844.49-1.887.49-2.73 0c-.888-.516-1.493-2.331-2.703-5.962c-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454c-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364M20.026 11.5l.326-.98c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L12.423 4m5.367 2.21l-4.211 4.165"></svg:path>`,
})
export class SolarPlain3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain3LineDuotoneIcon],svg[solar-plain-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.584.194.875.291 1.119.454c.236.158.439.361.597.597c.163.244.26.535.454 1.118c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962Z"></svg:path><svg:path stroke-linecap="round" d="m17.79 6.21l-4.211 4.165" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlain3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain3LinearIcon],svg[solar-plain-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.584.194.875.291 1.119.454c.236.158.439.361.597.597c.163.244.26.535.454 1.118c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962Z"></svg:path><svg:path stroke-linecap="round" d="m17.79 6.21l-4.21 4.165"></svg:path></svg:g>`,
})
export class SolarPlain3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain3OutlineIcon],svg[solar-plain-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.144 3.63c-1.17.209-2.748.733-4.961 1.47L8.17 6.77c-1.78.594-3.069 1.025-3.98 1.412c-.952.405-1.29.687-1.4.876a1.88 1.88 0 0 0 0 1.886c.11.189.448.471 1.4.876c.911.387 2.2.818 3.98 1.411l.084.028c.486.162.864.287 1.189.505c.313.21.582.479.792.792c.218.325.343.703.505 1.19l.028.083c.593 1.78 1.024 3.069 1.41 3.98c.406.952.688 1.29.877 1.4a1.88 1.88 0 0 0 1.886 0c.189-.11.471-.448.876-1.4c.387-.911.818-2.2 1.411-3.98l1.67-5.012c.738-2.213 1.262-3.79 1.47-4.96c.21-1.176.05-1.676-.25-1.976s-.8-.46-1.975-.25m-.27-1.512c1.303-.232 2.476-.179 3.331.677c.856.855.909 2.028.677 3.33c-.23 1.295-.792 2.98-1.503 5.112l-1.705 5.115c-.578 1.735-1.027 3.083-1.442 4.058c-.4.94-.844 1.736-1.518 2.128a3.41 3.41 0 0 1-3.43 0c-.674-.392-1.118-1.188-1.518-2.128c-.415-.975-.864-2.323-1.443-4.058l-.012-.038c-.203-.607-.264-.772-.352-.903a1.4 1.4 0 0 0-.37-.37c-.13-.088-.296-.15-.904-.352l-.037-.012c-1.735-.579-3.083-1.028-4.058-1.443c-.94-.4-1.736-.844-2.128-1.518a3.41 3.41 0 0 1 0-3.43c.392-.674 1.188-1.118 2.128-1.518c.975-.415 2.323-.864 4.059-1.442l5.114-1.705c2.133-.711 3.817-1.273 5.112-1.503m-.193 4.207a.77.77 0 0 1-.006 1.087l-4.098 4.052a.768.768 0 0 1-1.08-1.092l4.097-4.053a.77.77 0 0 1 1.087.006" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlain3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlainBoldIcon],svg[solar-plain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 1 1 1.11 1.122l-5.416 5.366a1.4 1.4 0 0 0-.324 1.427c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962"></svg:path>`,
})
export class SolarPlainBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlainBoldDuotoneIcon],svg[solar-plain-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.245 7.76l5.172-5.171l-.003-.003c-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 0 1 1.116.005" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m18.635 15.67l1.717-5.15c1.498-4.495 2.248-6.744 1.064-7.932l-5.172 5.171a.79.79 0 0 1-.005 1.117l-5.416 5.367a1.4 1.4 0 0 0-.324 1.426c1.21 3.631 1.815 5.446 2.703 5.962a2.71 2.71 0 0 0 2.73 0c.888-.516 1.493-2.33 2.703-5.962" opacity=".5"></svg:path>`,
})
export class SolarPlainBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlainBrokenIcon],svg[solar-plain-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488l5.55-5.488l-1.055-1.066l-5.55 5.488z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.636 15.67c-1.21 3.63-1.816 5.446-2.703 5.962c-.844.49-1.887.49-2.73 0c-.888-.516-1.493-2.331-2.703-5.962c-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454c-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364M20.026 11.5l.326-.98c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L12.423 4"></svg:path></svg:g>`,
})
export class SolarPlainBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlainLineDuotoneIcon],svg[solar-plain-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.584.194.875.291 1.119.454c.236.158.439.361.597.597c.163.244.26.535.454 1.118c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962Z"></svg:path><svg:path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488l5.55-5.488l-1.055-1.066l-5.55 5.488z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlainLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlainLinearIcon],svg[solar-plain-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.584.194.875.291 1.119.454c.236.158.439.361.597.597c.163.244.26.535.454 1.118c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962Z"></svg:path><svg:path fill="currentColor" d="M16.212 8.848a.75.75 0 0 0-1.055-1.066zm-5.55 5.488l5.55-5.488l-1.055-1.066l-5.55 5.488z"></svg:path></svg:g>`,
})
export class SolarPlainLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlainOutlineIcon],svg[solar-plain-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.144 3.63c-1.17.209-2.748.733-4.961 1.47L8.17 6.77c-1.78.594-3.069 1.025-3.98 1.412c-.952.405-1.29.687-1.4.876a1.88 1.88 0 0 0 0 1.886c.11.189.448.471 1.4.876c.911.387 2.2.818 3.98 1.411l.084.028c.38.126.693.23.967.374l5.323-5.265a.768.768 0 1 1 1.08 1.093l-5.3 5.241c.166.292.278.628.416 1.043l.028.084c.593 1.78 1.024 3.069 1.41 3.98c.406.952.688 1.29.877 1.4a1.88 1.88 0 0 0 1.886 0c.189-.11.471-.448.876-1.4c.387-.911.818-2.2 1.411-3.98l1.67-5.012c.738-2.213 1.262-3.79 1.47-4.96c.21-1.176.05-1.676-.25-1.976s-.8-.46-1.975-.25m-.27-1.512c1.303-.232 2.476-.179 3.331.677c.856.855.909 2.028.677 3.33c-.23 1.295-.792 2.98-1.503 5.112l-1.705 5.115c-.578 1.735-1.027 3.083-1.442 4.058c-.4.94-.844 1.736-1.518 2.128a3.41 3.41 0 0 1-3.43 0c-.674-.392-1.118-1.188-1.518-2.128c-.415-.975-.864-2.323-1.443-4.058l-.012-.038c-.203-.607-.264-.772-.352-.903a1.4 1.4 0 0 0-.37-.37c-.13-.088-.296-.15-.904-.352l-.037-.012c-1.735-.579-3.083-1.028-4.058-1.443c-.94-.4-1.736-.844-2.128-1.518a3.41 3.41 0 0 1 0-3.43c.392-.674 1.188-1.118 2.128-1.518c.975-.415 2.323-.864 4.059-1.442l5.114-1.705c2.133-.711 3.817-1.273 5.112-1.503" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlainOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2BoldIcon],svg[solar-planet-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 0 0 7.992-8.357q.384-.344.72-.682a.75.75 0 0 0-1.004-1.111a8 8 0 0 0-1.546-2.953q.449-.076.847-.113a.75.75 0 0 0-.138-1.494q-.637.06-1.345.2a.75.75 0 0 0-.472.309a8 8 0 0 0-13.013 7.024a.75.75 0 0 0-.73.193q-.503.505-.896.995a.75.75 0 1 0 1.172.937q.303-.38.707-.792a8 8 0 0 0 1.6 3.014a.75.75 0 0 0 .591 1.34a18 18 0 0 0 .666-.146A7.97 7.97 0 0 0 12 20m-4.849-1.636a8 8 0 0 1-1.256-1.194a.75.75 0 0 1 .3-.132c.996-.198 2.136-.53 3.36-.99a.75.75 0 0 1 .528 1.405c-1.03.387-2.018.693-2.932.91M19.708 9.85l-.06.054c-.687.692-1.568 1.43-2.61 2.171a.75.75 0 0 0 .871 1.222a24 24 0 0 0 2.083-1.654a8 8 0 0 0-.284-1.793m1.229-4.47a.75.75 0 1 0-.346 1.459c.394.093.546.232.602.322c.063.102.133.366-.157.948a.75.75 0 0 0 1.343.67c.378-.759.563-1.65.086-2.413c-.344-.55-.923-.843-1.528-.987M2.815 16.25a.75.75 0 0 0-1.43-.455c-.191.601-.211 1.262.15 1.84c.453.724 1.307 1.006 2.154 1.087a.75.75 0 1 0 .143-1.493c-.694-.066-.948-.267-1.025-.39c-.05-.08-.102-.244.008-.589m12.935-1.546a.75.75 0 1 0-.77-1.287a35 35 0 0 1-3.092 1.645a.75.75 0 0 0 .638 1.357a37 37 0 0 0 3.224-1.715" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlanet2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2BoldDuotoneIcon],svg[solar-planet-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.009 6.784a.75.75 0 0 0-.138-1.494q-.637.06-1.345.2a.75.75 0 0 0-.472.309l1.117 1.097q.444-.075.838-.112"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.937 5.38a.75.75 0 1 0-.346 1.459c.394.093.546.232.602.322c.063.102.133.366-.157.948a.75.75 0 0 0 1.343.67c.378-.759.563-1.65.086-2.413c-.344-.55-.923-.843-1.528-.987m-.225 5.581a.75.75 0 1 0-1.065-1.057c-.686.692-1.567 1.43-2.608 2.171a.75.75 0 0 0 .87 1.222c1.095-.78 2.044-1.572 2.803-2.336M3.587 14.947q.302-.378.706-.79l-.238-1.33a.75.75 0 0 0-.744.189q-.503.505-.896.995a.75.75 0 1 0 1.172.937m12.163-.243a.75.75 0 1 0-.77-1.287a35 35 0 0 1-3.092 1.645a.75.75 0 0 0 .638 1.357a37 37 0 0 0 3.224-1.715M2.815 16.25a.75.75 0 0 0-1.43-.455c-.191.601-.211 1.262.15 1.84c.453.724 1.307 1.006 2.154 1.087a.75.75 0 1 0 .143-1.493c-.694-.066-.948-.267-1.025-.39c-.05-.08-.102-.244.008-.589m7.268 1.203a.75.75 0 0 0-.527-1.404c-1.225.46-2.365.791-3.362.989a.75.75 0 0 0 .291 1.471c1.093-.216 2.313-.574 3.598-1.056" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlanet2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2BrokenIcon],svg[solar-planet-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray="3.5 2.5" d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538c1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.516-.823.163-2.178 1.672-3.69"></svg:path><svg:path d="M8 5.07A8 8 0 1 1 5.07 8"></svg:path></svg:g>`,
})
export class SolarPlanet2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2LineDuotoneIcon],svg[solar-planet-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path stroke-dasharray="3.5 2.5" stroke-linecap="round" d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538c1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.516-.823.163-2.178 1.672-3.69" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlanet2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2LinearIcon],svg[solar-planet-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path stroke-dasharray="3.5 2.5" stroke-linecap="round" d="M17.671 6.225c2.102-.415 3.654-.268 4.158.538c1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.516-.823.163-2.178 1.672-3.69"></svg:path></svg:g>`,
})
export class SolarPlanet2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2OutlineIcon],svg[solar-planet-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.815 16.25a.75.75 0 1 0-1.43-.456c-.191.602-.211 1.263.15 1.84c.453.724 1.307 1.007 2.154 1.088a.75.75 0 0 0 .143-1.493c-.694-.066-.948-.267-1.025-.39c-.05-.08-.102-.244.008-.59m3.67 2.26a20 20 0 0 0 1.615-.396a7.3 7.3 0 0 1-1.414-1.181q-.252.059-.492.105a.75.75 0 0 0-.572.953q.246.264.515.505c.11.031.229.037.348.014"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.082 10.444a22 22 0 0 1-2.043 1.631a.75.75 0 1 0 .87 1.222q.712-.507 1.335-1.016a7.3 7.3 0 0 0-.162-1.838M8.1 18.113q.957-.275 1.983-.66a.75.75 0 0 0-.527-1.405a23 23 0 0 1-2.87.884c.418.45.894.848 1.414 1.181m7.65-3.41a.75.75 0 0 0-.77-1.287a35 35 0 0 1-3.092 1.645a.75.75 0 1 0 .638 1.358a37 37 0 0 0 3.224-1.715" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.75 12a7.25 7.25 0 0 1 14.332-1.556q.302-.274.565-.54a.75.75 0 0 1 .807-.17a8.7 8.7 0 0 0-1.43-2.952a.75.75 0 0 0-.153-1.492q-.517.048-1.081.15a8.75 8.75 0 0 0-14.478 7.576q-.504.504-.897.995a.75.75 0 0 0 1.172.936l.12-.147a8.75 8.75 0 0 0 1.915 3.19a.75.75 0 0 1 .572-.953q.24-.046.492-.105A7.22 7.22 0 0 1 4.75 12M12 20.75a8.75 8.75 0 0 0 8.691-9.768c-.425.426-.91.862-1.447 1.299A7.25 7.25 0 0 1 8.1 18.113q-.844.243-1.615.396a.75.75 0 0 1-.348-.014A8.72 8.72 0 0 0 12 20.75"></svg:path><svg:path fill="currentColor" d="M19.647 9.904a15 15 0 0 1-.565.54a7.3 7.3 0 0 1 .162 1.837a19 19 0 0 0 1.447-1.3a9 9 0 0 0-.237-1.247a.75.75 0 0 0-.807.17m1.29-4.525a.75.75 0 1 0-.346 1.46c.394.093.546.232.602.322c.063.101.133.366-.157.948a.75.75 0 0 0 1.343.669c.378-.758.563-1.65.086-2.413c-.344-.55-.923-.843-1.528-.986"></svg:path><svg:path fill="currentColor" d="M20.712 10.96a.75.75 0 0 0-.258-1.226q.163.608.237 1.248z"></svg:path>`,
})
export class SolarPlanet2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3BoldIcon],svg[solar-planet-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.775 14.118Q22 13.092 22 12a10 10 0 0 0-.525-3.206l-.527-.038h-.011l-.051-.003a10 10 0 0 0-1.096.043a13.4 13.4 0 0 0-3.047.67c-.263.09-.563.252-.958.485l-.248.148c-.322.192-.69.413-1.088.62c-1.03.539-2.323 1.031-4.012 1.031c-2.418 0-4.407-.804-5.78-1.596a12.4 12.4 0 0 1-1.6-1.096a9 9 0 0 1-.48-.415a10.1 10.1 0 0 0-.498 4.628l.385-.02h.011l.027-.001a9 9 0 0 1 .45-.006c.303.002.733.014 1.253.054c1.037.082 2.447.278 3.923.742c.45.142.899.374 1.327.606l.299.163c.346.19.697.383 1.087.57c.98.47 2.144.871 3.668.871c1.383 0 2.662-.344 3.802-.766c.571-.21 1.099-.438 1.591-.65l.018-.007c.475-.204.937-.403 1.343-.538z"></svg:path><svg:path fill="currentColor" d="M21.206 15.912q-.32.131-.711.3l-.01.005c-.487.21-1.045.45-1.654.674c-1.226.454-2.693.86-4.322.86c-1.813 0-3.203-.486-4.317-1.02a24 24 0 0 1-1.18-.617l-.272-.15c-.43-.232-.764-.399-1.062-.493a16.4 16.4 0 0 0-3.59-.677a16 16 0 0 0-1.453-.048l-.077.003h-.02l-.153.008C3.582 18.94 7.433 22 12 22c4.135 0 7.683-2.51 9.206-6.088M2.71 8.293l.285-.28zm.527-1.114l.297.302l.003.004l.019.018l.086.081c.079.072.2.18.36.31c.32.26.795.61 1.404.96c1.219.704 2.95 1.396 5.031 1.396c1.374 0 2.425-.394 3.317-.86c.355-.186.675-.377.993-.567l.275-.163c.392-.232.81-.468 1.235-.614a15 15 0 0 1 3.39-.743a11 11 0 0 1 1.156-.052A10 10 0 0 0 12 2a10 10 0 0 0-8.763 5.179m17.786.504L21 8.006z"></svg:path>`,
})
export class SolarPlanet3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3BoldDuotoneIcon],svg[solar-planet-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.206 15.912a41 41 0 0 0-.711.3l-.01.005c-.487.21-1.045.45-1.654.674c-1.226.454-2.693.86-4.322.86c-1.813 0-3.203-.486-4.317-1.02c-.43-.206-.829-.425-1.18-.617l-.272-.15c-.43-.232-.764-.399-1.062-.493a16.4 16.4 0 0 0-3.59-.677a16 16 0 0 0-1.453-.048l-.077.003h-.021l-.152.008a10.005 10.005 0 0 0 18.821 1.155M3.237 7.179l.297.302l.003.004l.019.018l.086.081c.079.072.2.18.36.31c.32.26.795.61 1.404.96c1.219.704 2.949 1.396 5.03 1.396c1.374 0 2.426-.394 3.318-.86c.355-.186.675-.377.993-.567l.275-.163c.392-.232.81-.468 1.234-.614a15 15 0 0 1 3.391-.743a11 11 0 0 1 1.155-.052A10 10 0 0 0 12 2a10 10 0 0 0-8.763 5.179"></svg:path><svg:path fill="currentColor" d="M21.775 14.118Q22 13.092 22 12a10 10 0 0 0-.525-3.206l-.527-.038h-.011l-.051-.003a10 10 0 0 0-1.096.043a13.4 13.4 0 0 0-3.047.67c-.263.09-.563.252-.958.485l-.248.148c-.322.193-.69.413-1.088.62c-1.03.539-2.323 1.031-4.012 1.031c-2.418 0-4.407-.803-5.78-1.596a12 12 0 0 1-1.6-1.096a9 9 0 0 1-.48-.415a10.1 10.1 0 0 0-.498 4.628l.385-.02h.011l.027-.001a9 9 0 0 1 .45-.006c.303.002.733.014 1.253.055c1.037.08 2.447.277 3.923.742c.45.141.899.373 1.327.605l.299.163c.346.19.697.383 1.087.57c.98.47 2.144.871 3.668.871c1.383 0 2.662-.344 3.802-.766c.571-.21 1.099-.437 1.591-.65l.018-.007c.475-.204.937-.403 1.343-.538z" opacity=".5"></svg:path>`,
})
export class SolarPlanet3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3BrokenIcon],svg[solar-planet-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 8.008S5.937 11 10.437 11M21 8.008s-1.917-.138-4.5.748c-.797.273-1.303.695-2.5 1.244M3 14.008s.768-.05 2 .107m2.903.64C9.401 15.228 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPlanet3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3LineDuotoneIcon],svg[solar-planet-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 8.008S5.937 11 10.437 11c3.063 0 4.689-1.773 6.063-2.244c2.583-.886 4.5-.748 4.5-.748m-18 6s2.089-.138 4.903.748C9.401 15.226 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2" opacity=".5"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path></svg:g>`,
})
export class SolarPlanet3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3LinearIcon],svg[solar-planet-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path stroke-linecap="round" d="M3 8.008S5.937 11 10.437 11c3.063 0 4.689-1.773 6.063-2.244c2.583-.886 4.5-.748 4.5-.748m-18 6s2.089-.138 4.903.748C9.401 15.226 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2"></svg:path></svg:g>`,
})
export class SolarPlanet3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3OutlineIcon],svg[solar-planet-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.192 9.166a9.24 9.24 0 0 0-.355 4.11a1 1 0 0 1 .114-.017l.049.749l-.05-.749h.013l.024-.002a5 5 0 0 1 .386-.007c.259.001.629.012 1.088.053c.919.08 2.2.275 3.667.737c.451.142.9.374 1.327.606l.299.163c.346.19.697.383 1.087.57c.98.47 2.144.871 3.668.871c2.824 0 5.055-1.06 6.36-1.884a1 1 0 0 1 .088-.048c.191-.74.293-1.517.293-2.318a9.2 9.2 0 0 0-.587-3.25c-.2 0-.497.01-.873.046a13.4 13.4 0 0 0-3.047.67c-.263.09-.563.252-.958.485l-.248.148c-.323.193-.69.413-1.088.62c-1.03.539-2.323 1.031-4.012 1.031c-2.418 0-4.406-.804-5.78-1.597a12.5 12.5 0 0 1-1.465-.987m.605-1.445q.088.077.205.172c.32.26.796.61 1.404.961c1.22.704 2.95 1.396 5.031 1.396c1.374 0 2.425-.394 3.317-.86c.356-.186.675-.377.993-.567l.275-.164c.392-.231.81-.467 1.235-.613a15 15 0 0 1 3.698-.768A9.24 9.24 0 0 0 12 2.75a9.25 9.25 0 0 0-8.203 4.971m16.288 8.776a13.25 13.25 0 0 1-5.576 1.253c-1.813 0-3.202-.485-4.317-1.02c-.43-.206-.828-.424-1.18-.617l-.272-.149c-.429-.232-.764-.399-1.062-.493a16 16 0 0 0-3.347-.674a12 12 0 0 0-1.165-.045a9.254 9.254 0 0 0 16.92 1.745M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlanet3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet4BoldIcon],svg[solar-planet-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.846 15.572a8.04 8.04 0 0 0-.152-3.773l-.738-.045h-.008l-.039-.002l-.17-.002a9 9 0 0 0-.675.03c-.582.048-1.406.165-2.353.443c-.194.057-.419.161-.725.316l-.191.098c-.25.128-.541.277-.854.417c-.813.364-1.83.696-3.157.696c-1.893 0-3.453-.54-4.537-1.075a10 10 0 0 1-1.264-.743a7 7 0 0 1-.436-.328l-.027-.022l-.008-.008l-.003-.002l-.001-.001l.484-.557l-.485.556l-.102-.089a8.06 8.06 0 0 0-.305 3.784l.37-.015l.03.75l-.03-.75h.031a7 7 0 0 1 .365-.005c.243.002.588.01 1.003.037a16 16 0 0 1 3.086.498c.356.098.709.257 1.038.412l.23.11c.265.126.53.253.825.375a6.9 6.9 0 0 0 2.771.573c2.142 0 4.332-.864 5.32-1.407l.657-.361z"></svg:path><svg:path fill="currentColor" d="M17.202 17.486c-1.273.585-3.316 1.264-5.383 1.264a8.4 8.4 0 0 1-3.348-.688c-.333-.14-.643-.287-.912-.415l-.206-.099c-.329-.154-.576-.261-.794-.32a14.4 14.4 0 0 0-2.788-.45a15 15 0 0 0-1.224-.03l-.014.001h-.002l-.045.002a8.003 8.003 0 0 0 14.716.735M3.043 10.047l.449.392l.001.001l.013.01l.063.052q.088.07.27.2a9 9 0 0 0 1.073.628c.934.462 2.266.92 3.872.92c1.057 0 1.862-.26 2.544-.565c.273-.122.518-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.3 13.3 0 0 1 2.654-.498a10 10 0 0 1 1.013-.033l.062.002l.019.001h.01l-.046.748l.046-.747l.027.001A8 8 0 0 0 10 6a8 8 0 0 0-6.957 4.047"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.53 4.045a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003c.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82c.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82c-.696.403-1.278.826-1.615 1.157" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlanet4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet4BoldDuotoneIcon],svg[solar-planet-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.202 17.486c-1.273.585-3.317 1.264-5.383 1.264a8.4 8.4 0 0 1-3.348-.688c-.334-.14-.643-.287-.912-.415l-.207-.099c-.328-.154-.575-.261-.793-.32a14.4 14.4 0 0 0-2.788-.45a15 15 0 0 0-1.224-.03l-.014.001H2.53l-.046.002a8.003 8.003 0 0 0 14.717.735M3.043 10.047l.449.392v.001l.014.01q.018.017.063.052q.088.07.27.2a9 9 0 0 0 1.073.628c.934.462 2.266.92 3.872.92c1.057 0 1.862-.26 2.544-.565c.273-.122.517-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.3 13.3 0 0 1 2.654-.498a10 10 0 0 1 1.012-.033l.063.002l.019.001h.009l.028.002A8 8 0 0 0 10 6a8 8 0 0 0-6.957 4.047"></svg:path><svg:path fill="currentColor" d="M17.846 15.571a8.04 8.04 0 0 0-.152-3.772l-.738-.046h-.008l-.039-.002l-.17-.001c-.154 0-.384.006-.675.03c-.582.048-1.406.165-2.353.443c-.194.057-.419.16-.725.316l-.191.097c-.25.129-.541.278-.854.418c-.813.364-1.83.695-3.157.695c-1.893 0-3.453-.539-4.537-1.075a10 10 0 0 1-1.264-.742a7 7 0 0 1-.436-.328l-.027-.023l-.008-.007l-.003-.003h-.001s-.001-.001.484-.557l-.485.556l-.102-.09a8.06 8.06 0 0 0-.305 3.785l.37-.015l.03.75l-.03-.75h.009l.022-.001l.079-.002q.102-.003.286-.002c.243.001.588.01 1.003.037c.826.054 1.944.185 3.086.498c.356.098.709.256 1.038.411l.23.11c.265.126.53.253.825.376a6.9 6.9 0 0 0 2.771.573c2.142 0 4.332-.865 5.32-1.408l.657-.36zm2.378-12.057c.326-.09.548-.096.606.004s-.058.29-.3.527a2 2 0 0 1-3.424 1.976c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 1 3.424-1.977" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20.53 4.045a2 2 0 0 0-.306-.53c-.455.126-1.113.418-1.81.82c-.696.402-1.277.826-1.614 1.156a2 2 0 0 0 .306.53c.455-.126 1.112-.418 1.809-.82s1.278-.825 1.615-1.156"></svg:path>`,
})
export class SolarPlanet4BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet4BrokenIcon],svg[solar-planet-4-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 20.93A8 8 0 1 0 3.07 18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496c2.009-.59 3.5-.499 3.5-.499m-14 5s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18a10.85 10.85 0 0 0 5.181-1.333"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.53 4.045a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003c.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82c.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82c-.696.403-1.278.826-1.615 1.157" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SolarPlanet4BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet4LineDuotoneIcon],svg[solar-planet-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M18 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496c2.009-.59 3.5-.499 3.5-.499m-14 5s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18a10.85 10.85 0 0 0 5.181-1.333" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.53 4.045a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003c.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82c.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82c-.696.403-1.278.826-1.615 1.157" clip-rule="evenodd" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlanet4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet4LinearIcon],svg[solar-planet-4-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M18 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496c2.009-.59 3.5-.499 3.5-.499m-14 5s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18a10.85 10.85 0 0 0 5.181-1.333"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.53 4.045a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003c.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82c.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82c-.696.403-1.278.826-1.615 1.157" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SolarPlanet4LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet4OutlineIcon],svg[solar-planet-4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 5.25a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M4.013 16.78a10 10 0 0 0-.723-.03a7.252 7.252 0 0 0 12.81 1.169c-1.11.444-2.567.83-4.28.83a8.4 8.4 0 0 1-3.35-.687c-.332-.14-.642-.287-.91-.415l-.207-.099c-.329-.154-.576-.261-.794-.32a13.6 13.6 0 0 0-2.546-.447M2.75 14c0-.705.1-1.386.288-2.03c.292.2.7.453 1.21.705a10.26 10.26 0 0 0 4.536 1.075c1.326 0 2.344-.332 3.157-.696c.313-.14.603-.289.854-.417l.191-.098c.306-.155.531-.259.725-.316c.947-.278 1.77-.395 2.353-.443a9 9 0 0 1 .83-.028a7.3 7.3 0 0 1 .1 4.164a.75.75 0 0 0-.355.093c-.984.54-2.675 1.24-4.82 1.24a6.9 6.9 0 0 1-2.77-.572a18 18 0 0 1-.826-.376l-.23-.11c-.33-.154-.682-.313-1.038-.41a15 15 0 0 0-2.828-.496a12 12 0 0 0-1.075-.033l-.066.003h-.019l-.006.001h-.004a1 1 0 0 0-.096.012A7.3 7.3 0 0 1 2.75 14m.875-3.455q.083.064.215.156a8.8 8.8 0 0 0 4.944 1.549c1.057 0 1.862-.26 2.544-.565c.273-.122.518-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.3 13.3 0 0 1 2.928-.518A7.25 7.25 0 0 0 10 6.75a7.25 7.25 0 0 0-6.375 3.795m16.905-6.5a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003c.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82c.695-.402 1.277-.826 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82c-.696.403-1.278.826-1.615 1.157" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlanet4OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanetBoldIcon],svg[solar-planet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.992 11.643q.425-.38.789-.752c.754-.77 1.342-1.54 1.672-2.268c.324-.716.458-1.544.012-2.258c-.42-.67-1.185-.96-1.956-1.064c-.79-.107-1.75-.041-2.797.152l-.888.165a8 8 0 0 0-12.82 6.641l-.527.593c-.84.817-1.497 1.636-1.872 2.403c-.366.75-.54 1.627-.07 2.38c.433.691 1.232.979 2.032 1.074c.825.098 1.828.016 2.923-.201q.323-.064.66-.145a8 8 0 0 1-1.311-1.26c-.853.146-1.56.18-2.095.116c-.632-.075-.865-.264-.937-.38c-.063-.1-.132-.358.145-.925c.241-.494.688-1.092 1.342-1.758a8 8 0 0 0 1.545 2.947q.176-.03.36-.067c2.02-.4 4.613-1.351 7.28-2.772c2.665-1.42 4.848-3.012 6.227-4.42a8 8 0 0 0-1.545-2.947c.885-.151 1.61-.182 2.149-.11c.594.08.813.262.883.374c.06.095.126.33-.107.844c-.227.502-.683 1.129-1.377 1.836l-.003.003c.161.576.259 1.179.286 1.799"></svg:path><svg:path fill="currentColor" d="M12 20a8 8 0 0 0 7.992-8.357c-1.481 1.327-3.49 2.71-5.808 3.945c-2.492 1.328-4.96 2.281-7.033 2.775A7.97 7.97 0 0 0 12 20"></svg:path>`,
})
export class SolarPlanetBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanetBoldDuotoneIcon],svg[solar-planet-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.712 5.453c1.047-.193 2.006-.259 2.797-.152c.77.103 1.536.393 1.956 1.064c.446.714.312 1.542-.012 2.258c-.33.728-.918 1.499-1.672 2.268c-1.516 1.547-3.836 3.226-6.597 4.697c-2.763 1.472-5.495 2.484-7.694 2.92c-1.095.217-2.098.299-2.923.201c-.8-.095-1.6-.383-2.032-1.075c-.47-.752-.296-1.63.07-2.379c.375-.768 1.032-1.586 1.872-2.403L4 12.416c0 .219.083.71.168 1.146c.045.23.09.444.123.596c-.652.666-1.098 1.263-1.339 1.756c-.277.567-.208.825-.145.925c.072.116.305.305.937.38c.609.073 1.44.018 2.455-.183c2.02-.4 4.613-1.351 7.28-2.772s4.85-3.015 6.23-4.423c.694-.707 1.15-1.334 1.377-1.836c.233-.515.167-.75.107-.844c-.07-.112-.289-.294-.883-.374c-.542-.072-1.272-.041-2.163.112L16.87 5.656c.338-.101.658-.17.842-.203"></svg:path>`,
})
export class SolarPlanetBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanetBrokenIcon],svg[solar-planet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 5.07A8 8 0 1 1 5.07 8"></svg:path><svg:path stroke-linejoin="round" d="M13.83 14.926c-5.428 2.893-10.648 3.927-11.66 2.31c-.532-.852.211-2.27 1.83-3.846m13.849-7.2c2.011-.37 3.49-.21 3.98.573c.798 1.275-1.26 3.817-4.829 6.253"></svg:path></svg:g>`,
})
export class SolarPlanetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanetLineDuotoneIcon],svg[solar-planet-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path d="M17.849 6.19c2.011-.37 3.49-.21 3.98.573c1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.533-.852.21-2.27 1.829-3.846" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlanetLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanetLinearIcon],svg[solar-planet-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"></svg:path><svg:path d="M17.849 6.19c2.011-.37 3.49-.21 3.98.573c1.011 1.616-2.57 5.271-7.998 8.163s-10.649 3.927-11.66 2.31c-.533-.852.21-2.27 1.829-3.846"></svg:path></svg:g>`,
})
export class SolarPlanetLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanetOutlineIcon],svg[solar-planet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.75a7.25 7.25 0 0 0-5.314 12.182c1.942-.448 4.336-1.359 6.792-2.667c2.294-1.223 4.23-2.572 5.605-3.822A7.25 7.25 0 0 0 12 4.75m7.245 7.531c-1.382 1.126-3.112 2.269-5.062 3.307c-2.12 1.13-4.224 1.99-6.083 2.525a7.25 7.25 0 0 0 11.144-5.832M6.21 18.561a8.75 8.75 0 0 0 14.481-7.58l.09-.09c.754-.77 1.342-1.54 1.672-2.268c.324-.716.458-1.544.012-2.258c-.42-.67-1.185-.96-1.956-1.064s-1.702-.044-2.72.138a8.75 8.75 0 0 0-14.481 7.58c-.758.761-1.354 1.52-1.703 2.236c-.366.75-.54 1.627-.07 2.38c.433.691 1.232.979 2.032 1.074c.754.09 1.657.029 2.643-.148m-1.235-1.343A8.7 8.7 0 0 1 3.708 14.8c-.344.41-.595.785-.756 1.114c-.277.567-.208.825-.145.925c.072.116.305.305.937.38q.516.063 1.231-.001m14.05-10.436a6 6 0 0 1 1.285.005c.594.08.813.262.883.374c.06.095.126.33-.107.844c-.156.344-.42.748-.794 1.195a8.7 8.7 0 0 0-1.267-2.418" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlanetOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlateBoldIcon],svg[solar-plate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 12.057c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.837 0-3.293 0-4.432-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.926q.001-.575.008-1.096c.014-.975.05-1.81.145-2.523c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c.716-.096 1.558-.132 2.541-.145l.697-.005a1 1 0 0 1 1.001.999V5a2.25 2.25 0 0 0 4.5 0v-.75c0-.552.448-1 1-.998c1.29.006 2.359.033 3.239.151c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433zM8 9.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlateBoldDuotoneIcon],svg[solar-plate-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 3.06 3.955C4.375 3 6.251 3 10 3h4c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C23 6.375 23 8.251 23 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C19.625 21 17.749 21 14 21h-4c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C1 17.625 1 15.749 1 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM8 9.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarPlateBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlateBrokenIcon],svg[solar-plate-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4m6 0c3.114.01 4.765.108 5.828 1.17c.654.654.943 1.529 1.07 2.83M12 5V3m-4 7.5h8M8 14h5.5"></svg:path>`,
})
export class SolarPlateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlateLineDuotoneIcon],svg[solar-plate-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15 4.001c3.114.01 4.765.108 5.828 1.17C22 6.344 22 8.23 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4" opacity=".5"></svg:path><svg:path d="M12 5V3m-4 7.5h8M8 14h5.5"></svg:path></svg:g>`,
})
export class SolarPlateLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlateLinearIcon],svg[solar-plate-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 4.001c3.114.01 4.765.108 5.828 1.17C22 6.344 22 8.23 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828C4.235 4.109 5.886 4.01 9 4m3 1V3m-4 7.5h8M8 14h5.5"></svg:path>`,
})
export class SolarPlateLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlateOutlineIcon],svg[solar-plate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M9.002 4.75a.75.75 0 0 0-.004-1.5c-1.547.005-2.8.03-3.807.202c-1.028.174-1.872.511-2.55 1.19c-.748.748-1.08 1.697-1.238 2.869c-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.432.153h4.114c1.837 0 3.293 0 4.432-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433c-.158-1.172-.49-2.121-1.238-2.87c-.678-.678-1.522-1.015-2.55-1.19c-1.006-.17-2.26-.196-3.807-.2a.75.75 0 0 0-.004 1.5c1.567.005 2.696.033 3.56.18c.842.142 1.355.386 1.74.77c.423.424.677 1.004.812 2.01c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008c.385-.385.898-.629 1.74-.772c.864-.146 1.993-.174 3.56-.18"></svg:path><svg:path fill="currentColor" d="M7.25 10.5A.75.75 0 0 1 8 9.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 13.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarPlateOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayBoldIcon],svg[solar-play-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"></svg:path>`,
})
export class SolarPlayBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayBoldDuotoneIcon],svg[solar-play-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 12c0-1.035-.53-2.07-1.591-2.647L8.597 2.385C6.534 1.264 4 2.724 4 5.033V12z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.597 21.615l12.812-6.968A2.99 2.99 0 0 0 23 12H4v6.967c0 2.31 2.534 3.769 4.597 2.648" opacity=".5"></svg:path>`,
})
export class SolarPlayBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayBrokenIcon],svg[solar-play-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484"></svg:path>`,
})
export class SolarPlayBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleBoldIcon],svg[solar-play-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlayCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleBoldDuotoneIcon],svg[solar-play-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118"></svg:path>`,
})
export class SolarPlayCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleBrokenIcon],svg[solar-play-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.888 9.935C14.963 10.812 15.5 11.25 15.5 12s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66c-.237.167-.506.339-.784.508c-1.073.652-1.609.978-2.09.617c-.48-.36-.524-1.116-.612-2.628c-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628c.481-.361 1.018-.035 2.09.617c.278.169.547.341.784.508c.27.19.565.418.862.66Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPlayCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleLineDuotoneIcon],svg[solar-play-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path d="M13.888 9.935C14.963 10.812 15.5 11.25 15.5 12s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66c-.237.167-.506.339-.784.508c-1.073.652-1.609.978-2.09.617c-.48-.36-.524-1.116-.612-2.628c-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628c.481-.361 1.018-.035 2.09.617c.278.169.547.341.784.508c.27.19.565.418.862.66Z"></svg:path></svg:g>`,
})
export class SolarPlayCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleLinearIcon],svg[solar-play-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path></svg:g>`,
})
export class SolarPlayCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleOutlineIcon],svg[solar-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.075 7.508c-1.329-.784-2.825.283-2.825 1.705v5.574c0 1.422 1.496 2.489 2.825 1.705l4.72-2.787c1.273-.752 1.273-2.658 0-3.41zM9.75 9.213c0-.198.096-.337.21-.408a.32.32 0 0 1 .352-.005l4.72 2.787a.47.47 0 0 1 .218.413a.47.47 0 0 1-.218.413l-4.72 2.787a.32.32 0 0 1-.353-.005a.47.47 0 0 1-.209-.408z"></svg:path><svg:path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0"></svg:path></svg:g>`,
})
export class SolarPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayLineDuotoneIcon],svg[solar-play-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M20.409 9.353a2.998 2.998 0 0 1 0 5.294L7.597 21.614C5.534 22.737 3 21.277 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"></svg:path>`,
})
export class SolarPlayLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayLinearIcon],svg[solar-play-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M20.409 9.353a2.998 2.998 0 0 1 0 5.294L7.597 21.614C5.534 22.737 3 21.277 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"></svg:path>`,
})
export class SolarPlayLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayOutlineIcon],svg[solar-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.238 3.044C5.652 2.182 3.75 3.32 3.75 5.033v13.934c0 1.714 1.902 2.851 3.488 1.989l12.812-6.967c1.6-.87 1.6-3.108 0-3.977zM2.25 5.033c0-2.905 3.167-4.687 5.705-3.306l12.812 6.967c2.644 1.438 2.644 5.174 0 6.612L7.955 22.273c-2.538 1.38-5.705-.4-5.705-3.306z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayStreamBoldIcon],svg[solar-play-stream-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495"></svg:path>`,
})
export class SolarPlayStreamBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayStreamBoldDuotoneIcon],svg[solar-play-stream-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.656 10.451C14.552 11.11 15 11.438 15 12s-.448.891-1.344 1.549a13 13 0 0 1-.718.495a12 12 0 0 1-.653.38c-.894.49-1.34.735-1.741.464s-.437-.838-.51-1.971c-.02-.321-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.272.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495"></svg:path>`,
})
export class SolarPlayStreamBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayStreamBrokenIcon],svg[solar-play-stream-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 12a9.97 9.97 0 0 1-2.922 7.064M2 12a9.97 9.97 0 0 1 2.936-7.078M19.141 5a10 10 0 0 1 2.027 3M5 19.142A10 10 0 0 1 2.832 16m13.453-7.956C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16C6.69 14.979 6 13.556 6 11.982C6 10.427 6.673 9.018 7.762 8"></svg:path><svg:path d="M13.656 10.451C14.552 11.11 15 11.438 15 12s-.448.891-1.344 1.549a13 13 0 0 1-.718.495a12 12 0 0 1-.653.38c-.894.49-1.34.735-1.741.464s-.437-.838-.51-1.971c-.02-.321-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.272.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495Z"></svg:path></svg:g>`,
})
export class SolarPlayStreamBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayStreamLineDuotoneIcon],svg[solar-play-stream-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.141 5A9.97 9.97 0 0 1 22 12a9.97 9.97 0 0 1-2.922 7.064M5 19.142A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.936-7.078m11.349 3.122C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16C6.69 14.979 6 13.556 6 11.982C6 10.427 6.673 9.018 7.762 8" opacity=".5"></svg:path><svg:path d="M13.656 10.451C14.552 11.11 15 11.438 15 12s-.448.891-1.344 1.549a13 13 0 0 1-.718.495a12 12 0 0 1-.653.38c-.894.49-1.34.735-1.741.464s-.437-.838-.51-1.971c-.02-.321-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.272.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495Z"></svg:path></svg:g>`,
})
export class SolarPlayStreamLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayStreamLinearIcon],svg[solar-play-stream-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.141 5A9.97 9.97 0 0 1 22 12a9.97 9.97 0 0 1-2.922 7.064M5 19.142A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.936-7.078m11.349 3.122C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16C6.69 14.979 6 13.556 6 11.982C6 10.427 6.673 9.018 7.762 8"></svg:path><svg:path d="M13.656 10.451C14.552 11.11 15 11.438 15 12s-.448.891-1.344 1.549a13 13 0 0 1-.718.495a12 12 0 0 1-.653.38c-.894.49-1.34.735-1.741.464s-.437-.838-.51-1.971c-.02-.321-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.272.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495Z"></svg:path></svg:g>`,
})
export class SolarPlayStreamLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayStreamOutlineIcon],svg[solar-play-stream-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06m-3.15 1.362l.052.03a13 13 0 0 1 .694.404c.245.155.505.337.761.525l.046.033c.408.3.79.58 1.06.864c.314.328.544.727.544 1.256c0 .53-.23.928-.543 1.257c-.27.283-.653.563-1.061.863a18 18 0 0 1-.807.558c-.215.136-.453.273-.694.405l-.053.029c-.4.22-.79.432-1.132.543c-.409.132-.882.161-1.336-.146c-.428-.289-.604-.717-.692-1.125c-.08-.373-.11-.845-.143-1.367l-.004-.052c-.021-.33-.035-.662-.035-.965s.014-.634.035-.965l.004-.052c.033-.522.063-.994.143-1.367c.088-.408.264-.836.692-1.125c.454-.307.927-.278 1.336-.146c.342.11.732.324 1.132.543m-1.642.87a1 1 0 0 0-.052.174c-.054.25-.079.608-.117 1.2c-.02.31-.032.608-.032.868s.012.558.032.869c.038.59.063.95.117 1.199a1 1 0 0 0 .052.174l.048-.014c.19-.062.451-.201.926-.46a12 12 0 0 0 .613-.358c.205-.13.436-.29.675-.466c.47-.345.74-.547.908-.723c.13-.135.13-.184.129-.217v-.008c0-.033 0-.082-.129-.217c-.167-.175-.438-.378-.909-.723a12 12 0 0 0-.674-.466c-.18-.114-.39-.235-.613-.357c-.475-.26-.736-.4-.926-.46z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlayStreamOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedBoldIcon],svg[solar-playback-speed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.608 1.517c.77-.175 1.57-.267 2.392-.267c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463a9.25 9.25 0 1 0 0-18.04a.75.75 0 1 1-.332-1.463M7.314 3.132a.75.75 0 0 1-.235 1.034A9.3 9.3 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.8 10.8 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235M2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392s.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.3 9.3 0 0 1 2.75 12c0-.709.08-1.398.23-2.06m.152 6.746a.75.75 0 0 1 1.034.235a9.3 9.3 0 0 0 2.913 2.913a.75.75 0 0 1-.8 1.27a10.8 10.8 0 0 1-3.382-3.383a.75.75 0 0 1 .235-1.035"></svg:path><svg:path fill="currentColor" d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path>`,
})
export class SolarPlaybackSpeedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedBoldDuotoneIcon],svg[solar-playback-speed-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.607 1.517c.77-.175 1.571-.267 2.393-.267c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.623-.092-2.393-.267a.75.75 0 1 1 .333-1.463a9.25 9.25 0 1 0 0-18.04a.75.75 0 1 1-.333-1.463"></svg:path><svg:path fill="currentColor" d="M7.313 3.132a.75.75 0 0 1-.235 1.034a9.3 9.3 0 0 0-2.912 2.912a.75.75 0 0 1-1.27-.799A10.8 10.8 0 0 1 6.28 2.897a.75.75 0 0 1 1.034.235M3.132 16.686a.75.75 0 0 1 1.034.235a9.3 9.3 0 0 0 2.912 2.913a.75.75 0 1 1-.799 1.269a10.8 10.8 0 0 1-3.382-3.383a.75.75 0 0 1 .235-1.034" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.98 9.94a.75.75 0 1 0-1.463-.333c-.175.77-.267 1.571-.267 2.393s.092 1.622.267 2.392a.75.75 0 0 0 1.463-.332A9.3 9.3 0 0 1 2.75 12c0-.709.08-1.398.23-2.06" opacity=".3"></svg:path><svg:path fill="currentColor" d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path>`,
})
export class SolarPlaybackSpeedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedBrokenIcon],svg[solar-playback-speed-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-dasharray="4 3" stroke-linecap="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path></svg:g>`,
})
export class SolarPlaybackSpeedBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedLineDuotoneIcon],svg[solar-playback-speed-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-dasharray="4 3" stroke-linecap="round" d="M12 22C6.477 22 2 17.523 2 12S6.977 2 12.5 2" opacity=".5"></svg:path><svg:path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path></svg:g>`,
})
export class SolarPlaybackSpeedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedLinearIcon],svg[solar-playback-speed-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-dasharray="4 3" stroke-linecap="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2"></svg:path><svg:path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path></svg:g>`,
})
export class SolarPlaybackSpeedLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedOutlineIcon],svg[solar-playback-speed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463a9.25 9.25 0 1 0 0-18.04a.75.75 0 1 1-.332-1.463c.77-.175 1.57-.267 2.392-.267M3.132 16.686a.75.75 0 0 1 1.034.235a9.3 9.3 0 0 0 2.913 2.913a.75.75 0 0 1-.8 1.27a10.8 10.8 0 0 1-3.382-3.383a.75.75 0 0 1 .235-1.035M2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392s.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.3 9.3 0 0 1 2.75 12c0-.709.08-1.398.23-2.06m4.334-6.808a.75.75 0 0 1-.235 1.034A9.3 9.3 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.8 10.8 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 9.213c0-1.423 1.496-2.49 2.825-1.705l4.72 2.787c1.273.752 1.273 2.658 0 3.41l-4.72 2.786c-1.329.785-2.825-.282-2.825-1.705zm1.71-.408a.47.47 0 0 0-.21.408v5.573c0 .199.096.338.21.409c.11.068.232.076.352.005l4.72-2.787A.47.47 0 0 0 15.25 12a.47.47 0 0 0-.218-.414L10.312 8.8a.32.32 0 0 0-.353.005" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlaybackSpeedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylist2BoldIcon],svg[solar-playlist-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.345 5.993c.278-.103.61-.19.97-.125c.442.08.836.329 1.1.692c.215.296.28.634.308.93c.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.75 1.75 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033l-1.785.857c-.369.177-.692.332-.964.432c-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321s1.435-3.322 3.25-3.322a3.2 3.2 0 0 1 1.75.522V10h.003q-.004-.254-.003-.545v-.11c0-.3-.002-.62.106-.915a1.75 1.75 0 0 1 .392-.623c.22-.225.509-.363.78-.492l.068-.033l1.785-.857c.369-.177.692-.332.964-.432"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m0 4A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlaylist2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylist2BoldDuotoneIcon],svg[solar-playlist-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m0 4A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.345 5.993c.278-.103.61-.19.97-.125c.442.08.836.329 1.1.692c.215.296.28.634.308.93c.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.75 1.75 0 0 1-.392.624c-.22.224-.509.362-.78.491l-.068.033l-1.785.857c-.369.177-.692.332-.964.432c-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321s1.435-3.322 3.25-3.322a3.2 3.2 0 0 1 1.75.522V10h.003q-.004-.254-.003-.545v-.109c0-.3-.002-.621.106-.916c.085-.233.219-.446.392-.623c.22-.225.509-.363.78-.492l.068-.033l1.785-.857c.369-.177.692-.332.964-.432"></svg:path>`,
})
export class SolarPlaylist2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylist2BrokenIcon],svg[solar-playlist-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429s1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10"></svg:path><svg:path stroke-linecap="round" d="m18.675 7.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372a1 1 0 0 0 .223-.356C21 9.147 21 8.957 21 8.578c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51ZM9 13H3m5 4H3M3 5h7.412M15 5h-1.588M13 9H6.824M3 9h1.324"></svg:path></svg:g>`,
})
export class SolarPlaylist2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylist2LineDuotoneIcon],svg[solar-playlist-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429s1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10"></svg:path><svg:path stroke-linecap="round" d="m18.675 7.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372a1 1 0 0 0 .223-.356C21 9.147 21 8.957 21 8.578c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51Z"></svg:path><svg:path stroke-linecap="round" d="M15 5H3m10 4H3m6 4H3m5 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlaylist2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylist2LinearIcon],svg[solar-playlist-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 16.429C16 17.849 14.88 19 13.5 19S11 17.849 11 16.429s1.12-2.572 2.5-2.572S16 15.008 16 16.43Zm0 0V10"></svg:path><svg:path stroke-linecap="round" d="m18.675 7.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356C16 8.853 16 9.042 16 9.42c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.372a1 1 0 0 0 .223-.356C21 9.147 21 8.957 21 8.578c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51ZM15 5H3m10 4H3m6 4H3m5 4H3"></svg:path></svg:g>`,
})
export class SolarPlaylist2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylist2OutlineIcon],svg[solar-playlist-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m17.613 2.4c-.196.073-.455.196-.863.392l-1.755.842c-.18.086-.282.136-.356.178l-.068.043a.3.3 0 0 0-.056.088l-.009.08a7 7 0 0 0-.006.398c0 .453 0 .74.02.948a1 1 0 0 0 .034.197a.25.25 0 0 0 .14.088a1 1 0 0 0 .193-.054c.196-.073.455-.196.863-.392l1.755-.842c.18-.086.282-.136.356-.178l.068-.043a.3.3 0 0 0 .056-.088l.009-.08c.006-.085.006-.199.006-.398c0-.453 0-.74-.02-.948a1 1 0 0 0-.034-.197a.25.25 0 0 0-.14-.088a1 1 0 0 0-.193.054m-3.097 1.541v.002zm.053-.085l.002-.001zm2.526-2.863c.278-.103.61-.19.97-.125c.442.08.836.329 1.1.692c.215.296.28.634.308.93c.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.75 1.75 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033l-1.785.857c-.369.177-.692.332-.964.432c-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321s1.435-3.322 3.25-3.322a3.2 3.2 0 0 1 1.75.522V10h.003q-.004-.254-.003-.545v-.11c0-.3-.002-.62.106-.915c.085-.234.219-.446.392-.623c.22-.225.509-.363.78-.492l.068-.033l1.785-.857c.369-.177.692-.332.964-.432M15.25 16.429c0-1.026-.803-1.822-1.75-1.822s-1.75.796-1.75 1.822s.803 1.821 1.75 1.821s1.75-.795 1.75-1.821M2.25 9A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlaylist2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistBoldIcon],svg[solar-playlist-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.122s-2.48 1.432-3.138 1.193a1.5 1.5 0 0 1-.451-.26c-.536-.45-.536-1.405-.536-3.315s0-2.864.536-3.314c.134-.113.287-.2.451-.26c.657-.24 1.484.238 3.138 1.192"></svg:path>`,
})
export class SolarPlaylistBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistBoldDuotoneIcon],svg[solar-playlist-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.121c-1.654.955-2.48 1.433-3.138 1.194a1.5 1.5 0 0 1-.451-.261c-.536-.45-.536-1.404-.536-3.314s0-2.865.536-3.314a1.5 1.5 0 0 1 .451-.26c.657-.24 1.484.238 3.138 1.192"></svg:path>`,
})
export class SolarPlaylistBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistBrokenIcon],svg[solar-playlist-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 14H3m8 4H3"></svg:path><svg:path d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.121c-1.654.955-2.48 1.433-3.138 1.194a1.5 1.5 0 0 1-.451-.261c-.536-.45-.536-1.404-.536-3.314s0-2.865.536-3.314a1.5 1.5 0 0 1 .451-.26c.657-.24 1.484.238 3.138 1.192Z"></svg:path><svg:path stroke-linecap="round" d="M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25"></svg:path></svg:g>`,
})
export class SolarPlaylistBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistLineDuotoneIcon],svg[solar-playlist-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path><svg:path d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.121c-1.654.955-2.48 1.433-3.138 1.194a1.5 1.5 0 0 1-.451-.261c-.536-.45-.536-1.404-.536-3.314s0-2.865.536-3.314a1.5 1.5 0 0 1 .451-.26c.657-.24 1.484.238 3.138 1.192Z"></svg:path></svg:g>`,
})
export class SolarPlaylistLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistLinearIcon],svg[solar-playlist-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 6H3m18 4H3m8 4H3m8 4H3"></svg:path><svg:path d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.121c-1.654.955-2.48 1.433-3.138 1.194a1.5 1.5 0 0 1-.451-.261c-.536-.45-.536-1.404-.536-3.314s0-2.865.536-3.314a1.5 1.5 0 0 1 .451-.26c.657-.24 1.484.238 3.138 1.192Z"></svg:path></svg:g>`,
})
export class SolarPlaylistLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2BoldIcon],svg[solar-playlist-minimalistic-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.75 6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m-2 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75m-4 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75m-1 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarPlaylistMinimalistic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2BoldDuotoneIcon],svg[solar-playlist-minimalistic-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.75 6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m-2 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75m-4 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75m-1 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarPlaylistMinimalistic2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2BrokenIcon],svg[solar-playlist-minimalistic-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 14H3m5 4H3m14-1.5V8"></svg:path><svg:circle cx="14.5" cy="16.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M21 12a4 4 0 0 1-4-4M3 6h7.412M15 6h-1.588M13 10H6.824M3 10h1.324"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2LineDuotoneIcon],svg[solar-playlist-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 6H3m10 4H3m6 4H3m5 4H3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M17 16.5V8"></svg:path><svg:circle cx="14.5" cy="16.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M21 12a4 4 0 0 1-4-4"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2LinearIcon],svg[solar-playlist-minimalistic-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M15 6H3m10 4H3m6 4H3m5 4H3m14-1.5V8"></svg:path><svg:circle cx="14.5" cy="16.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M21 12a4 4 0 0 1-4-4"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2OutlineIcon],svg[solar-playlist-minimalistic-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75m-.75 9.25a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0m-14-6.5A.75.75 0 0 1 3 9.25h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlaylistMinimalistic2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3BoldIcon],svg[solar-playlist-minimalistic-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 4A.75.75 0 0 1 3 3.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m0 5A.75.75 0 0 1 3 8.25h9a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.345 6.993c.278-.103.61-.19.97-.125c.442.08.836.329 1.1.692c.215.296.28.634.308.93c.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.75 1.75 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033l-1.785.857c-.369.177-.692.332-.964.432c-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321s1.435-3.322 3.25-3.322a3.2 3.2 0 0 1 1.75.522V11h.003q-.004-.254-.003-.545v-.109c0-.3-.002-.621.106-.916a1.75 1.75 0 0 1 .392-.623c.22-.225.509-.363.78-.492l.068-.033l1.785-.857c.369-.177.692-.332.964-.432"></svg:path>`,
})
export class SolarPlaylistMinimalistic3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3BoldDuotoneIcon],svg[solar-playlist-minimalistic-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 4A.75.75 0 0 1 3 3.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m0 5A.75.75 0 0 1 3 8.25h9a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.345 6.993c.278-.103.61-.19.97-.125c.442.08.836.329 1.1.692c.215.296.28.634.308.93c.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.75 1.75 0 0 1-.392.624c-.22.224-.509.362-.78.491l-.068.033l-1.785.857c-.369.177-.692.332-.964.432c-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321s1.435-3.322 3.25-3.322a3.2 3.2 0 0 1 1.75.522V11h.003q-.004-.254-.003-.544v-.11c0-.3-.002-.621.106-.916c.085-.233.219-.446.392-.623c.22-.225.509-.363.78-.492l.068-.033l1.785-.857c.369-.177.692-.332.964-.432"></svg:path>`,
})
export class SolarPlaylistMinimalistic3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3BrokenIcon],svg[solar-playlist-minimalistic-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M8 14H3m9-5H3"></svg:path><svg:path d="M16 17.429C16 18.849 14.88 20 13.5 20S11 18.849 11 17.429s1.12-2.572 2.5-2.572S16 16.008 16 17.43Zm0 0V11"></svg:path><svg:path stroke-linecap="round" d="m18.675 8.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356c-.061.166-.061.355-.061.734c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.373a1 1 0 0 0 .223-.356C21 10.149 21 9.958 21 9.58c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51ZM20 4H9.5M3 4h2.25"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3LineDuotoneIcon],svg[solar-playlist-minimalistic-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 4H3m5 10H3m9-5H3" opacity=".5"></svg:path><svg:path d="M16 17.429C16 18.849 14.88 20 13.5 20S11 18.849 11 17.429s1.12-2.572 2.5-2.572S16 16.008 16 17.43Zm0 0V11"></svg:path><svg:path stroke-linecap="round" d="m18.675 8.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356c-.061.166-.061.355-.061.734c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.373a1 1 0 0 0 .223-.356C21 10.149 21 9.958 21 9.58c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51Z"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3LinearIcon],svg[solar-playlist-minimalistic-3-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 4H3m5 10H3m9-5H3"></svg:path><svg:path d="M16 17.429C16 18.849 14.88 20 13.5 20S11 18.849 11 17.429s1.12-2.572 2.5-2.572S16 16.008 16 17.43Zm0 0V11"></svg:path><svg:path stroke-linecap="round" d="m18.675 8.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356c-.061.166-.061.355-.061.734c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.373a1 1 0 0 0 .223-.356C21 10.149 21 9.958 21 9.58c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51Z"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic3LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3OutlineIcon],svg[solar-playlist-minimalistic-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 4A.75.75 0 0 1 3 3.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m17.613 4.4c-.196.073-.455.196-.863.392l-1.755.842c-.18.086-.282.136-.356.178l-.068.043a.3.3 0 0 0-.056.088l-.009.08a7 7 0 0 0-.006.398c0 .454 0 .74.02.948a1 1 0 0 0 .034.197a.25.25 0 0 0 .14.088a1 1 0 0 0 .193-.054c.196-.073.455-.196.863-.392l1.755-.842c.18-.086.282-.136.356-.178l.068-.043a.3.3 0 0 0 .056-.088l.009-.08c.006-.085.006-.199.006-.398c0-.453 0-.74-.02-.948a1 1 0 0 0-.034-.197a.25.25 0 0 0-.14-.088a1 1 0 0 0-.193.054m.318 1.744l-.002.001zm-3.415-.203v.002zm.053-.085l.002-.001zm2.526-2.863c.278-.103.61-.19.97-.125c.442.08.836.329 1.1.692c.215.296.28.634.308.93c.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.75 1.75 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033l-1.785.857c-.369.177-.692.332-.964.432c-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321s1.435-3.322 3.25-3.322a3.2 3.2 0 0 1 1.75.522V11h.003q-.004-.254-.003-.545v-.109c0-.3-.002-.621.106-.916c.085-.234.219-.446.392-.623c.22-.225.509-.363.78-.492l.068-.033l1.785-.857c.369-.177.692-.332.964-.432M15.25 17.429c0-1.026-.803-1.822-1.75-1.822s-1.75.796-1.75 1.822s.803 1.821 1.75 1.821s1.75-.795 1.75-1.821M2.25 9A.75.75 0 0 1 3 8.25h9a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlaylistMinimalistic3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistOutlineIcon],svg[solar-playlist-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m16.955 3.443l.09.052c.789.455 1.442.833 1.909 1.186c.475.36.901.8 1.012 1.428c.045.259.045.523 0 .782c-.111.628-.537 1.068-1.012 1.428c-.467.353-1.12.73-1.91 1.186l-.089.052c-.788.455-1.442.833-1.981 1.06c-.55.232-1.144.38-1.744.162a2.3 2.3 0 0 1-.676-.39c-.49-.41-.657-1-.731-1.591C14 18.218 14 17.463 14 16.552v-.104c0-.91 0-1.665.073-2.246c.074-.591.242-1.18.73-1.59q.305-.256.677-.391c.6-.219 1.194-.07 1.744.162c.539.227 1.192.605 1.981 1.06m-2.564.322c-.442-.186-.59-.156-.647-.135a.8.8 0 0 0-.226.13c-.047.04-.147.153-.207.629S15.5 15.524 15.5 16.5s.001 1.635.061 2.111s.16.59.207.629a.8.8 0 0 0 .225.13c.058.02.206.05.648-.135c.442-.186 1.014-.515 1.859-1.003s1.416-.819 1.798-1.108s.43-.433.44-.494a.8.8 0 0 0 0-.26c-.01-.06-.058-.204-.44-.494s-.953-.62-1.798-1.108s-1.417-.817-1.859-1.003M2.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlaylistOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleBoldIcon],svg[solar-plug-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.483 2 12.014c0 5.278 4.078 9.602 9.25 9.986v-6.061a3.505 3.505 0 0 1-2.75-3.424v-.501a1 1 0 0 1 1-1.001h.25V9.01a.75.75 0 1 1 1.5 0v2.002h1.5V9.01a.75.75 0 1 1 1.5 0v2.002h.25a1 1 0 0 1 1 1.002v.5a3.505 3.505 0 0 1-2.75 3.425V22c5.172-.384 9.25-4.708 9.25-9.986C22 6.484 17.523 2 12 2"></svg:path>`,
})
export class SolarPlugCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleBoldDuotoneIcon],svg[solar-plug-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" opacity=".5"><svg:path fill-rule="evenodd" d="M12.75 22c5.172-.384 9.25-4.708 9.25-9.986V12c0-5.523-4.477-10-10-10S2 6.477 2 12v.014c0 5.278 4.078 9.602 9.25 9.986v-.028A10 10 0 0 1 2 12.007C2.004 6.48 6.48 2 12 2s9.996 4.48 10 10.007c-.004 5.267-4.08 9.582-9.25 9.965z" clip-rule="evenodd"></svg:path><svg:path d="M11.25 21.972a10 10 0 0 0 1.5 0c5.17-.383 9.246-4.698 9.25-9.965C21.996 6.48 17.52 2 12 2S2.004 6.48 2 12.007c.004 5.267 4.08 9.582 9.25 9.965"></svg:path></svg:g><svg:path fill="currentColor" d="M8.5 12.515a3.505 3.505 0 0 0 2.75 3.424v6.033a10 10 0 0 0 1.5 0V15.94a3.505 3.505 0 0 0 2.75-3.424v-.501a1 1 0 0 0-1-1.001h-.25V9.01a.75.75 0 1 0-1.5 0v2.003h-1.5V9.01a.75.75 0 1 0-1.5 0v2.003H9.5a1 1 0 0 0-1 1.001z"></svg:path>`,
})
export class SolarPlugCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleBrokenIcon],svg[solar-plug-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15.108v5.042c0 1.114-.905 2.038-1.987 1.817C5.442 21.038 2 16.966 2 12.083A10.1 10.1 0 0 1 3.362 7m13.002 14.158A10.09 10.09 0 0 0 22 12.083C22 6.514 17.523 2 12 2a9.9 9.9 0 0 0-5 1.349"></svg:path><svg:path d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M13.5 11V9m-3 2V9"></svg:path></svg:g>`,
})
export class SolarPlugCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleLineDuotoneIcon],svg[solar-plug-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.013 21.967l-.15.735zm6.021-1.482a.75.75 0 1 0 .66 1.347zm-5.872.747c-4.224-.858-7.412-4.625-7.412-9.149h-1.5c0 5.242 3.696 9.62 8.613 10.62zM2.75 12.083c0-5.16 4.147-9.333 9.25-9.333v-1.5c-5.943 0-10.75 4.856-10.75 10.833zM12 2.75c5.103 0 9.25 4.173 9.25 9.333h1.5C22.75 6.106 17.943 1.25 12 1.25zm.75 17.4v-5.042h-1.5v5.042zm8.5-8.067c0 3.697-2.13 6.89-5.216 8.402l.66 1.347a10.84 10.84 0 0 0 6.056-9.749zM9.863 22.703c1.658.336 2.887-1.085 2.887-2.553h-1.5c0 .759-.58 1.186-1.088 1.082z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 11V9m-3 2V9"></svg:path></svg:g>`,
})
export class SolarPlugCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleLinearIcon],svg[solar-plug-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.013 21.967l-.15.735zm6.021-1.482a.75.75 0 1 0 .66 1.347zm-5.872.747c-4.224-.858-7.412-4.625-7.412-9.149h-1.5c0 5.242 3.696 9.62 8.613 10.62zM2.75 12.083c0-5.16 4.147-9.333 9.25-9.333v-1.5c-5.943 0-10.75 4.856-10.75 10.833zM12 2.75c5.103 0 9.25 4.173 9.25 9.333h1.5C22.75 6.106 17.943 1.25 12 1.25zm.75 17.4v-5.042h-1.5v5.042zm8.5-8.067c0 3.697-2.13 6.89-5.216 8.402l.66 1.347a10.84 10.84 0 0 0 6.056-9.749zM9.863 22.703c1.658.336 2.887-1.085 2.887-2.553h-1.5c0 .759-.58 1.186-1.088 1.082z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 11V9m-3 2V9"></svg:path></svg:g>`,
})
export class SolarPlugCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleOutlineIcon],svg[solar-plug-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75c-5.103 0-9.25 4.173-9.25 9.333c0 4.524 3.188 8.29 7.412 9.15c.508.102 1.088-.324 1.088-1.083v-4.475a3.75 3.75 0 0 1-3-3.675v-.2c0-.84.667-1.523 1.5-1.55V9a.75.75 0 0 1 1.5 0v1.25h1.5V9a.75.75 0 0 1 1.5 0v1.25c.833.027 1.5.71 1.5 1.55v.2a3.75 3.75 0 0 1-3 3.675v4.475c0 1.468-1.229 2.89-2.887 2.552c-4.917-1-8.613-5.377-8.613-10.619C1.25 6.106 6.057 1.25 12 1.25s10.75 4.856 10.75 10.833a10.84 10.84 0 0 1-6.056 9.749a.75.75 0 0 1-.66-1.347a9.34 9.34 0 0 0 5.216-8.402c0-5.16-4.147-9.333-9.25-9.333m-2.2 9a.05.05 0 0 0-.05.05v.2a2.25 2.25 0 0 0 4.5 0v-.2a.05.05 0 0 0-.05-.05z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlugCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusBoldIcon],svg[solar-plus-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-4.134 0-6.455 0-7.952-.988L21.012 4.048C22 5.545 22 7.866 22 12m-3.25 5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.134 0 6.455.988 7.952L19.952 2.988C18.455 2 16.134 2 12 2M8 4.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5H8.75v1.75a.75.75 0 0 1-1.5 0V8.75H5.5a.75.75 0 0 1 0-1.5h1.75V5.5A.75.75 0 0 1 8 4.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlusMinusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusBoldDuotoneIcon],svg[solar-plus-minus-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 4.714 0 7.071 1.464 8.535l17.072-17.07C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 4.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5H8.75v1.75a.75.75 0 0 1-1.5 0V8.75H5.5a.75.75 0 0 1 0-1.5h1.75V5.5A.75.75 0 0 1 8 4.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.07 0-8.535-1.465l17.07-17.07C22 4.928 22 7.284 22 12s0 7.071-1.464 8.535C19.07 22 16.714 22 12 22m6-4.25a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlusMinusBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusBrokenIcon],svg[solar-plus-minus-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m3.464 20.535l17.071-17.07"></svg:path><svg:path stroke-linecap="round" d="M18 17h-5m-2.5-9H8m0 0H5.5M8 8V5.5M8 8v2.5M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarPlusMinusBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusLineDuotoneIcon],svg[solar-plus-minus-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536M3.465 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464M3.465 20.536l17.07-17.072"></svg:path><svg:path stroke-linecap="round" d="M18 17h-5m-2.5-9H8m0 0H5.5M8 8V5.5M8 8v2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlusMinusLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusLinearIcon],svg[solar-plus-minus-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536M3.465 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464M3.465 20.536l17.07-17.072"></svg:path><svg:path stroke-linecap="round" d="M18 17h-5m-2.5-9H8m0 0H5.5M8 8V5.5M8 8v2.5"></svg:path></svg:g>`,
})
export class SolarPlusMinusLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusOutlineIcon],svg[solar-plus-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.119.882.311 1.522.606 2.021L19.407 3.532c-.499-.295-1.139-.487-2.02-.606c-1.3-.174-3.009-.176-5.387-.176s-4.086.002-5.386.176m13.855 1.667L4.593 20.468c.499.295 1.139.487 2.02.606c1.3.174 3.009.176 5.387.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.119-.882-.311-1.522-.606-2.021M8 4.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5H8.75v1.75a.75.75 0 0 1-1.5 0V8.75H5.5a.75.75 0 0 1 0-1.5h1.75V5.5A.75.75 0 0 1 8 4.75M12.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlusMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPodcastBoldIcon],svg[solar-podcast-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.837 10.546c0-.402-.312-.728-.697-.728H8.58C8.905 8.158 10.312 6.91 12 6.91s3.095 1.25 3.419 2.91H12.93c-.385 0-.697.325-.697.726c0 .402.312.728.697.728h2.558v1.454H12.93c-.385 0-.697.326-.697.727c0 .402.312.728.697.728h2.489c-.278 1.425-1.354 2.547-2.721 2.836v2.255c0 .401-.313.727-.698.727s-.698-.326-.698-.727v-2.255c-1.367-.29-2.443-1.411-2.72-2.836h1.557c.386 0 .698-.326.698-.728s-.312-.727-.697-.727H8.512v-1.454h1.627c.386 0 .698-.326.698-.727"></svg:path><svg:path fill="currentColor" d="M12 4c-3.33 0-6.054 2.701-6.266 6.116a2.46 2.46 0 0 0-1.176-.298C3.145 9.818 2 11.012 2 12.485v1.94c0 1.472 1.145 2.666 2.558 2.666q.072 0 .143-.004v.004c1.334 0 2.415-1.127 2.415-2.518v-4.028c0-2.811 2.187-5.09 4.884-5.09s4.884 2.279 4.884 5.09v4.028c0 1.39 1.08 2.518 2.415 2.518v-.004q.07.004.143.004c1.413 0 2.558-1.194 2.558-2.667v-1.94c0-1.472-1.145-2.666-2.558-2.666c-.424 0-.824.108-1.176.298C18.054 6.701 15.329 4 12 4"></svg:path>`,
})
export class SolarPodcastBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPodcastBoldDuotoneIcon],svg[solar-podcast-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.837 10.546c0-.402-.312-.728-.697-.728H8.58c.324-1.66 1.731-2.909 3.42-2.909c1.687 0 3.095 1.25 3.418 2.91H12.93c-.385 0-.697.325-.697.726c0 .402.312.728.697.728h2.559v1.454H12.93c-.385 0-.697.326-.697.728s.312.727.697.727h2.489c-.278 1.425-1.354 2.547-2.721 2.836v2.255c0 .401-.313.727-.698.727s-.698-.326-.698-.727v-2.255c-1.366-.289-2.443-1.411-2.72-2.836h1.558c.385 0 .697-.326.697-.727c0-.402-.312-.728-.697-.728H8.512v-1.454h1.628c.385 0 .697-.326.697-.727"></svg:path><svg:path fill="currentColor" d="M12 4c-3.33 0-6.054 2.701-6.266 6.116a2.46 2.46 0 0 0-1.176-.298C3.145 9.818 2 11.012 2 12.485v1.94c0 1.472 1.145 2.666 2.558 2.666q.072 0 .143-.004v.004c1.334 0 2.415-1.127 2.415-2.518v-4.028c0-2.811 2.187-5.09 4.884-5.09s4.884 2.279 4.884 5.09v4.028c0 1.39 1.08 2.518 2.415 2.518v-.004q.07.004.143.004c1.413 0 2.558-1.194 2.558-2.667v-1.94c0-1.472-1.145-2.666-2.558-2.666c-.424 0-.824.108-1.176.298C18.054 6.701 15.329 4 12 4" opacity=".5"></svg:path>`,
})
export class SolarPodcastBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPodcastBrokenIcon],svg[solar-podcast-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13 10h2m-2 3h2m-6-3h1m-1 3h1"></svg:path><svg:path fill="currentColor" d="M16.951 8.25a.75.75 0 1 0 1.415-.5zM6.75 14.154V10h-1.5v4.154zm-1.5 0c0 .605-.49 1.096-1.096 1.096v1.5a2.596 2.596 0 0 0 2.596-2.596zm12 0a2.596 2.596 0 0 0 2.596 2.596v-1.5c-.605 0-1.096-.49-1.096-1.096zM12 3.25A6.75 6.75 0 0 0 5.25 10h1.5c0-2.9 2.35-5.25 5.25-5.25zm0 1.5c2.285 0 4.23 1.46 4.951 3.5l1.415-.5A6.75 6.75 0 0 0 12 3.25z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 16v3"></svg:path></svg:g>`,
})
export class SolarPodcastBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPodcastLineDuotoneIcon],svg[solar-podcast-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M13 10h2m-2 3h2m-6-3h1m-1 3h1" opacity=".5"></svg:path><svg:path d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 1 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846" opacity=".5"></svg:path><svg:path d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"></svg:path><svg:path stroke-linecap="round" d="M12 16v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPodcastLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPodcastLinearIcon],svg[solar-podcast-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M13 10h2m-2 3h2m-6-3h1m-1 3h1"></svg:path><svg:path d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 1 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846"></svg:path><svg:path d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"></svg:path><svg:path stroke-linecap="round" d="M12 16v3"></svg:path></svg:g>`,
})
export class SolarPodcastLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPodcastOutlineIcon],svg[solar-podcast-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.264 9.557a6.75 6.75 0 0 1 13.472 0A2.75 2.75 0 0 1 22.75 12v2a2.75 2.75 0 0 1-2.904 2.746v.004a2.596 2.596 0 0 1-2.596-2.596V10a5.25 5.25 0 0 0-10.5 0v4.154a2.596 2.596 0 0 1-2.596 2.596v-.004q-.076.004-.154.004A2.75 2.75 0 0 1 1.25 14v-2a2.75 2.75 0 0 1 4.014-2.443M5.25 12a1.25 1.25 0 0 0-2.5.001v2a1.25 1.25 0 0 0 2.5 0zm3-1.999a3.75 3.75 0 1 1 7.5 0v3a3.75 3.75 0 0 1-3 3.675V19a.75.75 0 0 1-1.5 0v-2.325a3.75 3.75 0 0 1-3-3.675zm1.628-.75H10a.75.75 0 0 1 0 1.5h-.25v1.5H10a.75.75 0 0 1 0 1.5h-.122a2.25 2.25 0 0 0 4.244 0H13a.75.75 0 0 1 0-1.5h1.25v-1.5H13a.75.75 0 0 1 0-1.5h1.122a2.251 2.251 0 0 0-4.244 0M20 10.75c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 1 0 2.5 0v-2c0-.69-.56-1.25-1.25-1.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarPodcastOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapBoldIcon],svg[solar-point-on-map-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.83v-5.667c0-1.044 0-1.566-.283-1.959c-.229-.317-.596-.486-1.25-.713c-.134 1.606-.666 3.247-1.501 4.682c-.973 1.672-2.418 3.167-4.269 3.974a4.26 4.26 0 0 1-3.394 0c-1.851-.807-3.296-2.302-4.269-3.974A11.5 11.5 0 0 1 4.7 9.658c-.383-.057-.676-.028-.93.113a1.5 1.5 0 0 0-.28.203C3 10.42 3 11.249 3 12.908v4.93c0 1.043 0 1.565.283 1.958s.778.558 1.768.888l.384.128c1.577.525 2.365.788 3.172.79q.364 0 .726-.052c.798-.115 1.548-.49 3.048-1.24c1.149-.575 1.724-.862 2.334-.995q.321-.07.65-.098c.623-.052 1.25.053 2.507.262c1.273.212 1.91.318 2.375.051q.239-.137.413-.35c.34-.415.34-1.06.34-2.35"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C8.686 2 6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.76 2.76 0 0 0 2.194 0C16.085 14.47 18 10.824 18 7.7C18 4.552 15.314 2 12 2m0 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarPointOnMapBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapBoldDuotoneIcon],svg[solar-point-on-map-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13.037c0-1.103 0-1.655.393-1.976c.139-.114.308-.206.497-.269c.532-.177 1.231-.002 2.629.346c1.067.267 1.6.4 2.14.386q.298-.008.588-.059c.525-.093.993-.326 1.929-.793l1.382-.69c1.2-.599 1.799-.898 2.487-.967s1.372.102 2.739.443l1.165.29c.99.247 1.485.371 1.768.665s.283.685.283 1.466v6.084c0 1.103 0 1.655-.393 1.976a1.6 1.6 0 0 1-.497.269c-.532.177-1.231.003-2.629-.346c-1.067-.267-1.6-.4-2.14-.386a4 4 0 0 0-.588.059c-.525.093-.993.326-1.929.793l-1.382.69c-1.2.599-1.799.898-2.487.967s-1.372-.102-2.739-.443l-1.165-.29c-.99-.247-1.485-.371-1.768-.665S3 19.902 3 19.121z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C8.686 2 6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.76 2.76 0 0 0 2.194 0C16.085 14.47 18 10.824 18 7.7C18 4.552 15.314 2 12 2m0 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarPointOnMapBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapBrokenIcon],svg[solar-point-on-map-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 13.162c0-1.043 0-3.565-.283-3.958s-.778-.558-1.768-.888L18 8m3 8.829c0 1.29 0 1.936-.34 2.351c-.115.14-.255.26-.413.35c-.465.267-1.102.16-2.375-.051c-1.256-.21-1.884-.314-2.507-.262q-.329.027-.65.097c-.61.134-1.185.421-2.334.996c-1.5.75-2.25 1.125-3.048 1.24q-.36.052-.726.052c-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888S3 18.88 3 17.838V17m0-4.092c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.515-.287 1.197-.11 2.454.304"></svg:path><svg:path stroke-linecap="round" d="M17.25 11.251c.486-1.157.75-2.39.75-3.55C18 4.551 15.314 2 12 2S6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.76 2.76 0 0 0 2.194 0c.954-.416 1.8-1.071 2.507-1.872"></svg:path><svg:circle cx="12" cy="8" r="2"></svg:circle></svg:g>`,
})
export class SolarPointOnMapBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapLineDuotoneIcon],svg[solar-point-on-map-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18 8l.949.316c.99.33 1.485.495 1.768.888s.283.915.283 1.958v5.667c0 1.29 0 1.936-.34 2.351c-.115.14-.255.26-.413.35c-.465.267-1.102.16-2.375-.051c-1.256-.21-1.884-.314-2.507-.262q-.329.027-.65.097c-.61.134-1.185.421-2.334.996c-1.5.75-2.25 1.125-3.048 1.24q-.36.052-.726.052c-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888S3 18.88 3 17.838v-4.93c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.578-.322 1.365-.06 2.938.465" opacity=".5"></svg:path><svg:path d="M6 7.7C6 4.552 8.686 2 12 2s6 2.552 6 5.7c0 3.124-1.915 6.769-4.903 8.072a2.76 2.76 0 0 1-2.194 0C7.915 14.47 6 10.824 6 7.7Z"></svg:path><svg:circle cx="12" cy="8" r="2"></svg:circle></svg:g>`,
})
export class SolarPointOnMapLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapLinearIcon],svg[solar-point-on-map-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m18 8l.949.316c.99.33 1.485.495 1.768.888s.283.915.283 1.958v5.667c0 1.29 0 1.936-.34 2.351c-.115.14-.255.26-.413.35c-.465.267-1.102.16-2.375-.051c-1.256-.21-1.884-.314-2.507-.262q-.329.027-.65.097c-.61.134-1.185.421-2.334.996c-1.5.75-2.25 1.125-3.048 1.24q-.36.052-.726.052c-.807-.002-1.595-.265-3.172-.79l-.384-.128c-.99-.33-1.485-.495-1.768-.888S3 18.88 3 17.838v-4.93c0-1.659 0-2.488.488-2.934a1.5 1.5 0 0 1 .281-.203c.578-.322 1.365-.06 2.938.465"></svg:path><svg:path d="M6 7.7C6 4.552 8.686 2 12 2s6 2.552 6 5.7c0 3.124-1.915 6.769-4.903 8.072a2.76 2.76 0 0 1-2.194 0C7.915 14.47 6 10.824 6 7.7Z"></svg:path><svg:circle cx="12" cy="8" r="2"></svg:circle></svg:g>`,
})
export class SolarPointOnMapLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapOutlineIcon],svg[solar-point-on-map-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 7.7c0-3.598 3.059-6.45 6.75-6.45c3.608 0 6.612 2.725 6.745 6.208l.478.16c.463.153.87.289 1.191.439c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.78.04 1.269v5.748c0 .61 0 1.13-.047 1.547c-.05.438-.161.87-.463 1.237a2.3 2.3 0 0 1-.62.525c-.412.237-.855.276-1.296.253c-.42-.022-.933-.107-1.534-.208l-.041-.007c-1.293-.215-1.814-.296-2.322-.254q-.278.023-.552.083c-.498.109-.976.342-2.159.933l-.122.061c-1.383.692-2.234 1.118-3.154 1.251q-.415.06-.835.06c-.928-.002-1.825-.301-3.28-.786l-.127-.043l-.384-.128l-.037-.012c-.463-.154-.87-.29-1.191-.44c-.348-.162-.667-.37-.911-.709s-.341-.707-.385-1.088c-.04-.353-.04-.78-.04-1.269v-5.02c0-.786 0-1.448.067-1.967c.07-.542.23-1.072.666-1.47a2.3 2.3 0 0 1 .42-.304c.517-.287 1.07-.27 1.605-.166q.164.032.342.078q-.1-.67-.1-1.328m.499 3.01a9 9 0 0 0-1.028-.288c-.395-.077-.525-.03-.586.004a1 1 0 0 0-.14.101c-.053.048-.138.156-.19.556c-.053.41-.055.974-.055 1.825v4.93c0 .539.001.88.03 1.138c.028.238.072.327.112.381c.039.055.109.125.326.226c.236.11.56.219 1.07.39l.384.127c1.624.541 2.279.75 2.936.752q.31 0 .617-.044c.65-.094 1.276-.397 2.82-1.17l.093-.046c1.06-.53 1.714-.857 2.417-1.01q.37-.081.747-.113c.717-.06 1.432.06 2.593.253l.1.017c.655.109 1.083.18 1.407.196c.312.016.419-.025.471-.055a.8.8 0 0 0 .207-.175c.039-.047.097-.146.132-.456c.037-.323.038-.757.038-1.42v-5.667c0-.539-.001-.88-.03-1.138c-.028-.238-.072-.327-.112-.381c-.039-.055-.109-.125-.326-.226c-.236-.11-.56-.219-1.07-.39l-.06-.019a10.7 10.7 0 0 1-1.335 3.788c-.912 1.568-2.247 2.934-3.92 3.663a3.5 3.5 0 0 1-2.794 0c-1.673-.73-3.008-2.095-3.92-3.663a11 11 0 0 1-.934-2.087M12 2.75c-2.936 0-5.25 2.252-5.25 4.95c0 1.418.437 2.98 1.23 4.341c.791 1.362 1.908 2.47 3.223 3.044c.505.22 1.089.22 1.594 0c1.316-.574 2.432-1.682 3.224-3.044c.792-1.36 1.229-2.923 1.229-4.34c0-2.699-2.314-4.951-5.25-4.951m0 4a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.25 8a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPointOnMapOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapPerspectiveBoldIcon],svg[solar-point-on-map-perspective-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2M8 22h8c2.482 0 3.875 0 4.773-.594l-8.514-4.683l-8.043 5.08C5.087 22 6.283 22 8 22m2.758-6.102L2.51 11.362C2 12.263 2 13.64 2 16c0 2.666 0 4.075.736 4.964z"></svg:path><svg:path fill="currentColor" d="M22 16c0-2.828 0-4.243-.879-5.121c-.49-.49-1.146-.707-2.121-.803V13a2 2 0 1 1-4 0v-3H8c-2.045 0-3.35 0-4.25.332l17.937 9.865C22 19.3 22 18.006 22 16"></svg:path>`,
})
export class SolarPointOnMapPerspectiveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapPerspectiveBoldDuotoneIcon],svg[solar-point-on-map-perspective-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16c0-2.828 0-4.243-.879-5.121c-.49-.49-1.146-.707-2.12-.803c-.834-.025-2.8-.076-4-.076H8c-2.046 0-3.351 0-4.25.332l17.936 9.865C22 19.3 22 18.006 22 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.758 15.898L2.51 11.362C2 12.264 2 13.64 2 16c0 2.666 0 4.075.736 4.964zM8 22h8c2.482 0 3.875 0 4.773-.594l-8.514-4.682l-8.043 5.08C5.087 22 6.283 22 8 22m9-20a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2"></svg:path>`,
})
export class SolarPointOnMapPerspectiveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapPerspectiveBrokenIcon],svg[solar-point-on-map-perspective-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16s0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879c-.3.3-.498.662-.628 1.121M21 21l-3.764-2.091M3 11l11 6.111"></svg:path><svg:path d="m3.5 21l6.358-3.74L12 16m5-3V8m-.5-5.959A3 3 0 1 1 14.041 4.5"></svg:path></svg:g>`,
})
export class SolarPointOnMapPerspectiveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapPerspectiveLineDuotoneIcon],svg[solar-point-on-map-perspective-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 21L3 11m.5 10l8.5-5m5-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 0v5" opacity=".5"></svg:path><svg:path d="M21.121 21.121C22 20.243 22 18.828 22 16s0-4.243-.879-5.121m0 10.242C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879m18.242 0Zm0-10.242C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879m18.242 0Zm-18.242 0C2 11.757 2 13.172 2 16s0 4.243.879 5.121m0-10.242Zm0 10.242Z"></svg:path></svg:g>`,
})
export class SolarPointOnMapPerspectiveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapPerspectiveLinearIcon],svg[solar-point-on-map-perspective-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21.121 21.121C22 20.243 22 18.828 22 16s0-4.243-.879-5.121m0 10.242C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879m18.242 0Zm0-10.242C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879m18.242 0Zm-18.242 0C2 11.757 2 13.172 2 16s0 4.243.879 5.121m0-10.242Zm0 10.242Z"></svg:path><svg:path stroke-linecap="round" d="M21 21L3 11m.5 10l8.5-5"></svg:path><svg:circle cx="17" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M17 13V8"></svg:path></svg:g>`,
})
export class SolarPointOnMapPerspectiveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapPerspectiveOutlineIcon],svg[solar-point-on-map-perspective-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 2.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M13.25 5a3.75 3.75 0 1 1 4.5 3.675v.586a15 15 0 0 1 1.642.106c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h8.305v-.575a3.75 3.75 0 0 1-3-3.675m3 5.75H8c-1.435 0-2.437.002-3.192.103q-.22.03-.403.07l7.948 4.415l.024.013l8.544 4.747c.1-.229.174-.52.226-.906c.101-.756.103-1.757.103-3.192s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.4-.054-.872-.08-1.441-.092V13a.75.75 0 0 1-1.5 0zm3.345 10.327l-7.584-4.213l-7.266 4.274l.063.009c.755.101 1.757.103 3.192.103h8c1.435 0 2.436-.002 3.192-.103q.221-.03.403-.07M3.19 20.312l7.3-4.293l-7.41-4.117c-.1.229-.175.52-.227.906c-.101.755-.103 1.757-.103 3.192s.002 2.436.103 3.192c.07.518.18.864.337 1.12" clip-rule="evenodd"></svg:path>`,
})
export class SolarPointOnMapPerspectiveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselHorizontalBoldIcon],svg[solar-posts-carousel-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16V8a3 3 0 0 0-3-3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5a3 3 0 0 0 3-3m7-11c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5zm6 3v8a3 3 0 0 0 3 3a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5a3 3 0 0 0-3 3"></svg:path>`,
})
export class SolarPostsCarouselHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselHorizontalBoldDuotoneIcon],svg[solar-posts-carousel-horizontal-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16V8a3 3 0 0 0-3-3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5a3 3 0 0 0 3-3m13-8v8a3 3 0 0 0 3 3a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5a3 3 0 0 0-3 3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.5 19c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5h1c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19z"></svg:path>`,
})
export class SolarPostsCarouselHorizontalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselHorizontalBrokenIcon],svg[solar-posts-carousel-horizontal-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2m13 .126c.387.084.68.225.914.46c.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414S14.385 19 12.5 19h-1c-1.886 0-2.829 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.617 5.054 9.443 5.005 11 5"></svg:path>`,
})
export class SolarPostsCarouselHorizontalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselHorizontalLineDuotoneIcon],svg[solar-posts-carousel-horizontal-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12.5 5c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5z"></svg:path><svg:path stroke-linecap="round" d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPostsCarouselHorizontalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselHorizontalLinearIcon],svg[solar-posts-carousel-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12.5 5c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5z"></svg:path><svg:path stroke-linecap="round" d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2"></svg:path></svg:g>`,
})
export class SolarPostsCarouselHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselHorizontalOutlineIcon],svg[solar-posts-carousel-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.448 4.25h1.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.344.08 2.243v6.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-1.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242V8.948c0-.898 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M9.405 5.817c-.461.062-.659.169-.789.3s-.237.327-.3.788C8.253 7.388 8.25 8.036 8.25 9v6c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h1c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V9c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066h-1c-.964 0-1.612.002-2.095.067" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.5 5.75a1.75 1.75 0 0 0-1.75 1.75v9c0 .966.784 1.75 1.75 1.75h.5a.75.75 0 0 1 0 1.5h-.5a3.25 3.25 0 0 1-3.25-3.25v-9a3.25 3.25 0 0 1 3.25-3.25h.5a.75.75 0 0 1 0 1.5zM2 4.25a.75.75 0 0 0 0 1.5h.5c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75H2a.75.75 0 0 0 0 1.5h.5a3.25 3.25 0 0 0 3.25-3.25v-9A3.25 3.25 0 0 0 2.5 4.25z"></svg:path>`,
})
export class SolarPostsCarouselHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselVerticalBoldIcon],svg[solar-posts-carousel-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5h8a3 3 0 0 0 3-3a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5a3 3 0 0 0 3 3m-3 6c0-1.886 0-2.828.586-3.414S7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586S19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414S16.886 16.5 15 16.5H9c-1.886 0-2.828 0-3.414-.586S5 14.386 5 12.5zm11 7H8a3 3 0 0 0-3 3a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5a3 3 0 0 0-3-3"></svg:path>`,
})
export class SolarPostsCarouselVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselVerticalBoldDuotoneIcon],svg[solar-posts-carousel-vertical-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5h8a3 3 0 0 0 3-3a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5a3 3 0 0 0 3 3m8 13H8a3 3 0 0 0-3 3a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5a3 3 0 0 0-3-3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5 11.5c0-1.886 0-2.828.586-3.414S7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586S19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414S16.886 16.5 15 16.5H9c-1.886 0-2.828 0-3.414-.586S5 14.386 5 12.5z"></svg:path>`,
})
export class SolarPostsCarouselVerticalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselVerticalBrokenIcon],svg[solar-posts-carousel-vertical-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.874 9c-.084-.387-.225-.68-.46-.914C17.828 7.5 16.886 7.5 15 7.5H9c-1.886 0-2.828 0-3.414.586S5 9.614 5 11.5v1c0 1.886 0 2.828.586 3.414S7.114 16.5 9 16.5h6c1.886 0 2.828 0 3.414-.586c.532-.531.581-1.357.585-2.914M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2m14 20v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5"></svg:path>`,
})
export class SolarPostsCarouselVerticalBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselVerticalLineDuotoneIcon],svg[solar-posts-carousel-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 11.5c0-1.886 0-2.828.586-3.414S7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586S19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414S16.886 16.5 15 16.5H9c-1.886 0-2.828 0-3.414-.586S5 14.386 5 12.5z"></svg:path><svg:path stroke-linecap="round" d="M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2m14 20v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPostsCarouselVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselVerticalLinearIcon],svg[solar-posts-carousel-vertical-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 11.5c0-1.886 0-2.828.586-3.414S7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586S19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414S16.886 16.5 15 16.5H9c-1.886 0-2.828 0-3.414-.586S5 14.386 5 12.5z"></svg:path><svg:path stroke-linecap="round" d="M19 2v.5A2.5 2.5 0 0 1 16.5 5h-9A2.5 2.5 0 0 1 5 2.5V2m14 20v-.5a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 5 21.5v.5"></svg:path></svg:g>`,
})
export class SolarPostsCarouselVerticalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselVerticalOutlineIcon],svg[solar-posts-carousel-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.25a.75.75 0 0 1 .75.75v.5c0 .966.784 1.75 1.75 1.75h9a1.75 1.75 0 0 0 1.75-1.75V2a.75.75 0 0 1 1.5 0v.5a3.25 3.25 0 0 1-3.25 3.25h-9A3.25 3.25 0 0 1 4.25 2.5V2A.75.75 0 0 1 5 1.25"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.948 6.75h6.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v1.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-1.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08M6.905 8.317c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v1c0 .964.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094v-1c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H9c-.964 0-1.612.002-2.095.067" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.5 18.25a3.25 3.25 0 0 0-3.25 3.25v.5a.75.75 0 0 0 1.5 0v-.5c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 0 1.5 0v-.5a3.25 3.25 0 0 0-3.25-3.25z"></svg:path>`,
})
export class SolarPostsCarouselVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPowerBoldIcon],svg[solar-power-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v4"></svg:path><svg:path fill="currentColor" d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M8.792 5.147a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985a.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 21A8.25 8.25 0 0 1 8.792 5.147"></svg:path></svg:g>`,
})
export class SolarPowerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPowerBoldDuotoneIcon],svg[solar-power-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.792 5.147a.75.75 0 0 0-.584-1.382A9.75 9.75 0 0 0 2.25 12.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985a.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 21A8.25 8.25 0 0 1 8.792 5.147" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarPowerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPowerBrokenIcon],svg[solar-power-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v4M8.5 3.706A9 9 0 0 0 3 12c0 2.305.867 4.408 2.292 6M15.5 3.706A9.003 9.003 0 0 1 9 20.488"></svg:path>`,
})
export class SolarPowerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPowerLineDuotoneIcon],svg[solar-power-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 2v4" opacity=".5"></svg:path><svg:path d="M8.5 3.706A9.003 9.003 0 0 0 12 21a9 9 0 0 0 3.5-17.294"></svg:path></svg:g>`,
})
export class SolarPowerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPowerLinearIcon],svg[solar-power-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v4M8.5 3.706A9.003 9.003 0 0 0 12 21a9 9 0 0 0 3.5-17.294"></svg:path>`,
})
export class SolarPowerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPowerOutlineIcon],svg[solar-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M8.792 4.397a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985a.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 20.25A8.25 8.25 0 0 1 8.792 4.397"></svg:path>`,
})
export class SolarPowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphBoldIcon],svg[solar-presentation-graph-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.25a.75.75 0 0 0 0 1.5h2v7.75c0 3.064 0 4.596 1.004 5.548s2.62.952 5.853.952h.393v3.537l-1.585.792a.75.75 0 1 0 .67 1.342L12 21.839l1.665.832a.75.75 0 1 0 .67-1.342l-1.585-.793V17h.393c3.232 0 4.849 0 5.853-.952S20 13.564 20 10.5V2.75h2a.75.75 0 0 0 0-1.5zm13.53 6.72a.75.75 0 0 1 0 1.06l-1.317 1.318a5 5 0 0 1-.452.416a1.24 1.24 0 0 1-.761.279a1.24 1.24 0 0 1-.761-.279a5 5 0 0 1-.452-.416l-.61-.61L11 9.561l-.177.175L9.53 11.03a.75.75 0 1 1-1.06-1.06l1.317-1.318c.145-.145.302-.302.452-.416A1.24 1.24 0 0 1 11 7.957c.334 0 .585.145.761.279c.15.114.307.271.452.416l.61.61l.177.176l.177-.175L14.47 7.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPresentationGraphBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphBoldDuotoneIcon],svg[solar-presentation-graph-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.5V2.75h16v7.75c0 3.064 0 4.596-1.004 5.548s-2.62.952-5.853.952h-2.286c-3.232 0-4.849 0-5.853-.952S4 13.564 4 10.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.53 9.03a.75.75 0 0 0-1.06-1.06l-1.293 1.293l-.177.175l-.177-.175l-.61-.61a5 5 0 0 0-.452-.417A1.24 1.24 0 0 0 11 7.957a1.24 1.24 0 0 0-.761.279c-.15.114-.307.271-.452.416L8.47 9.97a.75.75 0 1 0 1.06 1.06l1.293-1.293l.177-.175l.177.175l.61.61c.145.146.302.303.452.417c.176.134.427.279.761.279s.585-.145.761-.279c.15-.114.307-.271.452-.416zM2 1.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5zM11.25 17v3.537l-1.585.792a.75.75 0 1 0 .67 1.342L12 21.839l1.665.832a.75.75 0 1 0 .67-1.342l-1.585-.793V17z"></svg:path>`,
})
export class SolarPresentationGraphBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphBrokenIcon],svg[solar-presentation-graph-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5s.374.167.707.5l.586.586c.333.333.5.5.707.5s.374-.167.707-.5L15 8.5M12 21v-4m-2 5l2-1m2 1l-2-1"></svg:path><svg:path d="M4 2v8.5c0 3.064 0 4.596 1.004 5.548s2.62.952 5.853.952h2.286c3.232 0 4.849 0 5.853-.952S20 13.564 20 10.5V10m0-8v4"></svg:path></svg:g>`,
})
export class SolarPresentationGraphBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphLineDuotoneIcon],svg[solar-presentation-graph-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5s.374.167.707.5l.586.586c.333.333.5.5.707.5s.374-.167.707-.5L15 8.5"></svg:path><svg:path stroke-linecap="round" d="M12 21v-4m0 4l-2 1m2-1l2 1" opacity=".5"></svg:path><svg:path d="M20 2v8.5c0 3.064 0 4.596-1.004 5.548s-2.62.952-5.853.952h-2.286c-3.232 0-4.849 0-5.853-.952S4 13.564 4 10.5V2"></svg:path></svg:g>`,
})
export class SolarPresentationGraphLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphLinearIcon],svg[solar-presentation-graph-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5s.374.167.707.5l.586.586c.333.333.5.5.707.5s.374-.167.707-.5L15 8.5M12 21v-4m-2 5l2-1m2 1l-2-1"></svg:path><svg:path d="M20 2v8.5c0 3.064 0 4.596-1.004 5.548s-2.62.952-5.853.952h-2.286c-3.232 0-4.849 0-5.853-.952S4 13.564 4 10.5V2"></svg:path></svg:g>`,
})
export class SolarPresentationGraphLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphOutlineIcon],svg[solar-presentation-graph-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 0 1.5h-1.25v7.808c0 1.483 0 2.676-.133 3.614c-.138.975-.434 1.784-1.105 2.42c-.666.632-1.503.904-2.512 1.033c-.981.125-2.233.125-3.804.125h-.446v2.787l1.585.792a.75.75 0 1 1-.67 1.342L12 21.839l-1.665.832a.75.75 0 1 1-.67-1.342l1.585-.793V17.75h-.446c-1.571 0-2.823 0-3.804-.125c-1.01-.129-1.846-.401-2.512-1.033c-.671-.636-.967-1.445-1.105-2.42c-.133-.938-.133-2.131-.133-3.614V2.75H2A.75.75 0 0 1 1.25 2m3.5.75v7.75c0 1.554.002 2.64.118 3.46c.113.795.32 1.228.652 1.544c.338.32.812.524 1.67.633c.875.112 2.03.113 3.667.113h2.286c1.636 0 2.792-.001 3.667-.113c.858-.11 1.332-.313 1.67-.633c.332-.316.54-.749.652-1.543c.116-.82.118-1.907.118-3.461V2.75zm10.78 5.22a.75.75 0 0 1 0 1.06l-1.293 1.293l-.024.025a5 5 0 0 1-.452.416a1.24 1.24 0 0 1-.761.279a1.24 1.24 0 0 1-.761-.279a5 5 0 0 1-.452-.416l-.024-.025l-.586-.586L11 9.562l-.177.175L9.53 11.03a.75.75 0 1 1-1.06-1.06l1.293-1.293l.024-.025c.145-.145.302-.302.452-.416A1.24 1.24 0 0 1 11 7.957c.334 0 .585.145.761.279c.15.114.307.271.452.416l.024.025l.586.586l.177.175l.177-.175L14.47 7.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPresentationGraphOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinter2BoldIcon],svg[solar-printer-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.494.495 1.158.711 2.149.806C5 17.204 5 16.352 5 15.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 1.704-.028 2.427c.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6m-7 4.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zm8 .25a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.121 2.879C16.242 2 14.828 2 12 2s-4.243 0-5.122.879c-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015c-.095-.983-.312-1.644-.804-2.136M18 15.5c0 2.828 0 4.743-.879 5.621C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.328 6 15.5z"></svg:path>`,
})
export class SolarPrinter2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinter2BoldDuotoneIcon],svg[solar-printer-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.121 2.879C16.242 2 14.828 2 12 2s-4.243 0-5.122.879c-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015c-.095-.983-.312-1.644-.804-2.136M18 15.5c0 2.828 0 4.743-.879 5.621C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.328 6 15.5z"></svg:path><svg:path fill="currentColor" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.494.495 1.158.711 2.149.806C5 17.204 5 16.352 5 15.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 1.704-.028 2.427c.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 10.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zm9-.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarPrinter2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinter2BrokenIcon],svg[solar-printer-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879c.3.3.498.662.628 1.121M9 10H6m13 5H5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 15v1c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862M6 15v1c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862"></svg:path><svg:circle cx="17" cy="10" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarPrinter2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinter2LineDuotoneIcon],svg[solar-printer-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 10H6" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15H5m13 0v1c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-1"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6" opacity=".5"></svg:path><svg:circle cx="17" cy="10" r="1" fill="currentColor" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarPrinter2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinter2LinearIcon],svg[solar-printer-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 10H6m13 5H5"></svg:path><svg:path fill="currentColor" d="m17.121 2.879l-.53.53zm-10.242 0l.53.53zm0 18.242l.53-.53zM18.75 15a.75.75 0 0 0-1.5 0zm-12 0a.75.75 0 0 0-1.5 0zm10.5 1c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399l1.06 1.06c.603-.601.861-1.36.983-2.26c.118-.878.116-1.998.116-3.391zM12 22.75c1.393 0 2.513.002 3.392-.116c.9-.122 1.658-.38 2.26-.982L16.59 20.59c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103zm0-20c1.435 0 2.437.002 3.192.103c.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982c-.878-.119-1.998-.117-3.391-.117zm0-1.5c-1.393 0-2.513-.002-3.392.117c-.9.12-1.658.38-2.26.981L7.41 3.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103zM5.25 16c0 1.393-.002 2.513.117 3.392c.12.9.38 1.658.981 2.26L7.41 20.59c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191zM12 21.25c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983c.878.118 1.998.116 3.391.116zm6.732-15.273c-.046-1.542-.208-2.757-1.08-3.629L16.59 3.41c.41.41.595 1.049.642 2.614zm-11.965.046c.047-1.565.231-2.203.642-2.614l-1.06-1.06c-.873.871-1.035 2.086-1.081 3.628zM18.75 16v-1h-1.5v1zm-12 0v-1h-1.5v1z"></svg:path><svg:circle cx="17" cy="10" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarPrinter2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinter2OutlineIcon],svg[solar-printer-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.945 1.25h.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.74.74.968 1.727 1.05 2.951q.366.025.69.068c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.74.74-1.727.968-2.951 1.05q-.024.366-.067.69c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26q-.044-.324-.068-.69c-1.224-.082-2.21-.31-2.95-1.05c-.603-.602-.861-1.36-.982-2.26c-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981a10 10 0 0 1 .69-.068c.082-1.224.31-2.21 1.05-2.95c.602-.603 1.36-.861 2.26-.982c.867-.117 1.97-.117 3.337-.117M6.807 5.253q.535-.004 1.138-.003h8.11q.602 0 1.138.003c-.082-1.02-.267-1.508-.602-1.844c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103s-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.335.336-.52.823-.602 1.844m-1.554 11.94q-.004-.535-.003-1.138v-.305H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5h-.25v.305q0 .602-.003 1.138c1.02-.082 1.509-.267 1.844-.602c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191s.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.336.335.823.52 1.844.602M17.25 15.75H6.75V16c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103s2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191zM5.25 10A.75.75 0 0 1 6 9.25h3a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarPrinter2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterBoldIcon],svg[solar-printer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.494.495 1.158.711 2.149.806C5 17.204 5 15.352 5 14.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 2.704-.028 3.427c.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6m-7 4.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zm8 .25a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.121 2.879C16.242 2 14.828 2 12 2s-4.243 0-5.122.879c-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015c-.095-.983-.312-1.644-.804-2.136"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 14.5c0 2.828 0 5.743-.879 6.621C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 17.328 6 14.5zm-2.25 2.25a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 16h6a.75.75 0 0 1 .75.75m-2 3a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 19h4a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPrinterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterBoldDuotoneIcon],svg[solar-printer-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.121 2.879C16.242 2 14.828 2 12 2s-4.243 0-5.122.879c-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015c-.095-.983-.312-1.644-.804-2.136"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 14.5c0 2.828 0 5.743-.879 6.621C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 17.328 6 14.5zm-2.25 2.25a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 16h6a.75.75 0 0 1 .75.75m-2 3a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 19h4a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 17.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm-2 3a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.494.495 1.158.711 2.149.806C5 17.204 5 15.352 5 14.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 2.704-.028 3.427c.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 10.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zm9-.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarPrinterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterBrokenIcon],svg[solar-printer-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 10H6m13 4H5"></svg:path><svg:circle cx="17" cy="10" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5H9m4 2.5H9m13-7c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879c.3.3.498.662.628 1.121"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 15v1c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862M6 15v1c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862"></svg:path></svg:g>`,
})
export class SolarPrinterBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterLineDuotoneIcon],svg[solar-printer-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 10H6" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 14H5m13 0v2c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-2"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6" opacity=".5"></svg:path><svg:circle cx="17" cy="10" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5H9m4 2.5H9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPrinterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterLinearIcon],svg[solar-printer-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 10H6m13 4H5"></svg:path><svg:path fill="currentColor" d="m17.121 2.879l-.53.53zm-10.242 0l.53.53zm0 18.242l.53-.53zM18.75 14a.75.75 0 0 0-1.5 0zm-12 0a.75.75 0 0 0-1.5 0zm10.5 2c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399l1.06 1.06c.603-.601.861-1.36.983-2.26c.118-.878.116-1.998.116-3.391zM12 22.75c1.393 0 2.513.002 3.392-.116c.9-.122 1.658-.38 2.26-.982L16.59 20.59c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103zm0-20c1.435 0 2.437.002 3.192.103c.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982c-.878-.119-1.998-.117-3.391-.117zm0-1.5c-1.393 0-2.513-.002-3.392.117c-.9.12-1.658.38-2.26.981L7.41 3.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103zM5.25 16c0 1.393-.002 2.513.117 3.392c.12.9.38 1.658.981 2.26L7.41 20.59c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191zM12 21.25c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983c.878.118 1.998.116 3.391.116zm6.732-15.273c-.046-1.542-.208-2.757-1.08-3.629L16.59 3.41c.41.41.595 1.049.642 2.614zm-11.965.046c.047-1.565.231-2.203.642-2.614l-1.06-1.06c-.873.871-1.035 2.086-1.081 3.628zM18.75 16v-2h-1.5v2zm-12 0v-2h-1.5v2z"></svg:path><svg:circle cx="17" cy="10" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5H9m4 2.5H9"></svg:path></svg:g>`,
})
export class SolarPrinterLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticBoldIcon],svg[solar-printer-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.121 21.121C18 20.243 18 18.828 18 16v-3.34c-1.477-.502-3.458-.91-6-.91s-4.523.408-6 .91V16c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879"></svg:path><svg:path fill="currentColor" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.492.493 1.153.71 2.136.804C5 17.366 5 16.748 5 16.071v-3.029l-.193.085a.75.75 0 0 1-.614-1.368c1.722-.773 4.288-1.51 7.807-1.51s6.085.737 7.807 1.51a.75.75 0 1 1-.614 1.368L19 13.042v3.029c0 .677 0 1.295-.015 1.854c.983-.095 1.644-.311 2.136-.804C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6m1.12-3.121C16.243 2 14.829 2 12 2s-4.243 0-5.122.879c-.492.492-.709 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.141c.678 0 1.296 0 1.855.015c-.095-.983-.312-1.644-.804-2.136"></svg:path>`,
})
export class SolarPrinterMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticBoldDuotoneIcon],svg[solar-printer-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.121 21.121C18 20.243 18 18.828 18 16v-3.34c-1.477-.502-3.458-.91-6-.91s-4.523.408-6 .91V16c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879M17.12 2.879C16.243 2 14.829 2 12 2s-4.243 0-5.122.879c-.492.492-.709 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.141c.678 0 1.296 0 1.855.015c-.095-.983-.312-1.644-.804-2.136"></svg:path><svg:path fill="currentColor" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.492.493 1.153.71 2.136.804C5 17.366 5 16.748 5 16.071v-3.029l-.193.085a.75.75 0 0 1-.614-1.368c1.722-.773 4.288-1.51 7.807-1.51s6.085.737 7.807 1.51a.75.75 0 1 1-.614 1.368L19 13.042v3.029c0 .677 0 1.295-.015 1.854c.983-.095 1.644-.311 2.136-.804C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6" opacity=".5"></svg:path>`,
})
export class SolarPrinterMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticBrokenIcon],svg[solar-printer-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862m-12 0c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879c.3.3.498.662.628 1.121"></svg:path><svg:path d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2s-4.243 0-5.121.879C6.237 3.52 6.064 4.447 6.017 6M18 12v4c0 2.828 0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862M6 12v4c0 2.828 0 4.243.879 5.121c.641.642 1.568.815 3.121.862"></svg:path><svg:path d="M12 11c3.412 0 5.873.713 7.5 1.443m-15 0a15.8 15.8 0 0 1 3.5-1.08"></svg:path></svg:g>`,
})
export class SolarPrinterMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticLineDuotoneIcon],svg[solar-printer-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"></svg:path><svg:path stroke-linecap="round" d="M18 12v4c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-4"></svg:path><svg:path d="M17.983 6c-.047-1.553-.22-2.48-.861-3.121C16.242 2 14.829 2 12 2s-4.242 0-5.121.879C6.238 3.52 6.064 4.447 6.018 6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19.5 12.443C17.873 11.713 15.412 11 12 11s-5.873.713-7.5 1.443"></svg:path></svg:g>`,
})
export class SolarPrinterMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticLinearIcon],svg[solar-printer-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"></svg:path><svg:path fill="currentColor" d="m17.121 2.879l-.53.53zm-10.242 0l.53.53zm0 18.242l.53-.53zM18.75 12a.75.75 0 0 0-1.5 0zm-12 0a.75.75 0 0 0-1.5 0zm10.5 4c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399l1.06 1.06c.603-.601.861-1.36.983-2.26c.118-.878.116-1.998.116-3.391zM12 22.75c1.393 0 2.513.002 3.392-.116c.9-.122 1.658-.38 2.26-.982L16.59 20.59c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103zm0-20c1.435 0 2.437.002 3.192.103c.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982c-.878-.119-1.998-.117-3.391-.117zm0-1.5c-1.393 0-2.513-.002-3.392.117c-.9.12-1.658.38-2.26.981L7.41 3.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103zM5.25 16c0 1.393-.002 2.513.117 3.392c.12.9.38 1.658.981 2.26L7.41 20.59c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191zM12 21.25c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983c.878.118 1.998.116 3.391.116zm6.732-15.273c-.046-1.542-.208-2.757-1.08-3.629L16.59 3.41c.41.41.595 1.049.642 2.614zm-11.965.046c.047-1.565.231-2.203.642-2.614l-1.06-1.06c-.873.871-1.035 2.086-1.081 3.628zM18.75 16v-4h-1.5v4zm-12 0v-4h-1.5v4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.5 12.443C17.873 11.713 15.412 11 12 11s-5.873.713-7.5 1.443"></svg:path></svg:g>`,
})
export class SolarPrinterMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticOutlineIcon],svg[solar-printer-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.945 1.25h.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.74.74.968 1.727 1.05 2.951q.366.025.69.068c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.74.74-1.727.968-2.951 1.05q-.024.366-.067.69c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26q-.044-.324-.068-.69c-1.224-.082-2.21-.31-2.95-1.05c-.603-.602-.861-1.36-.982-2.26c-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981a10 10 0 0 1 .69-.068c.082-1.224.31-2.21 1.05-2.95c.602-.603 1.36-.861 2.26-.982c.867-.117 1.97-.117 3.337-.117M6.807 5.253q.535-.004 1.138-.003h8.11q.602 0 1.138.003c-.082-1.02-.267-1.508-.602-1.844c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103s-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.335.336-.52.823-.602 1.844m-1.554 11.94q-.004-.535-.003-1.138v-3.117q-.232.094-.443.19a.75.75 0 1 1-.614-1.37C5.915 10.987 8.48 10.25 12 10.25s6.085.736 7.807 1.509a.75.75 0 1 1-.614 1.368q-.21-.095-.443-.189v3.117q0 .602-.003 1.138c1.02-.082 1.509-.267 1.844-.602c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191s.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.336.335.823.52 1.844.602m11.997-4.766c-1.377-.39-3.116-.677-5.25-.677s-3.873.288-5.25.677V16c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103s2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPrinterMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterOutlineIcon],svg[solar-printer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.945 1.25h.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.74.74.968 1.727 1.05 2.951q.366.025.69.068c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26c-.74.74-1.727.968-2.951 1.05q-.024.366-.067.69c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26q-.044-.324-.068-.69c-1.224-.082-2.21-.31-2.95-1.05c-.603-.602-.861-1.36-.982-2.26c-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981a10 10 0 0 1 .69-.068c.082-1.224.31-2.21 1.05-2.95c.602-.603 1.36-.861 2.26-.982c.867-.117 1.97-.117 3.337-.117M6.807 5.253q.535-.004 1.138-.003h8.11q.602 0 1.138.003c-.082-1.02-.267-1.508-.602-1.844c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103s-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.335.336-.52.823-.602 1.844m-1.554 11.94q-.004-.535-.003-1.138V14.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5h-.25v1.305q0 .602-.003 1.138c1.02-.082 1.509-.267 1.844-.602c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191s.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.336.335.823.52 1.844.602M17.25 14.75H6.75V16c0 1.435.002 2.436.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103s2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.755.103-1.756.103-3.191zM5.25 10A.75.75 0 0 1 6 9.25h3a.75.75 0 1 1 0 1.5H6a.75.75 0 0 1-.75-.75m3 6.805a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPrinterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProgrammingBoldIcon],svg[solar-programming-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarProgrammingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProgrammingBoldDuotoneIcon],svg[solar-programming-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.424 9.52a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class SolarProgrammingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProgrammingBrokenIcon],svg[solar-programming-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarProgrammingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProgrammingLineDuotoneIcon],svg[solar-programming-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"></svg:path></svg:g>`,
})
export class SolarProgrammingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProgrammingLinearIcon],svg[solar-programming-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305s-.64 1.237-1.923 2.305L7 15"></svg:path></svg:g>`,
})
export class SolarProgrammingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProgrammingOutlineIcon],svg[solar-programming-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75M7.48 9.424a.75.75 0 1 0-.96 1.152l.234.195c.659.55 1.09.91 1.366 1.216c.262.29.287.427.287.513s-.025.222-.287.513c-.277.306-.707.667-1.366 1.216l-.234.195a.75.75 0 0 0 .96 1.152l.277-.23c.605-.504 1.12-.933 1.476-1.328c.378-.42.674-.901.674-1.518s-.296-1.099-.674-1.518c-.356-.395-.871-.824-1.476-1.328z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"></svg:path>`,
})
export class SolarProgrammingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProjectorBoldIcon],svg[solar-projector-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.614 20.643a.75.75 0 0 0 1.03-.257l1.431-2.387L8 18h8l.924-.001l1.433 2.387a.75.75 0 1 0 1.286-.772l-.997-1.661c1.174-.078 1.928-.285 2.475-.832C22 16.243 22 14.828 22 12s0-4.243-.879-5.121c-.326-.326-.726-.532-1.244-.66A6.5 6.5 0 1 1 8.233 6H8c-2.828-.001-4.243-.001-5.121.878S2 9.172 2 12s0 4.243.879 5.121c.547.547 1.301.754 2.475.832l-.997 1.661a.75.75 0 0 0 .257 1.03M5.5 8.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M14 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-.75-7a.75.75 0 0 1 .75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class SolarProjectorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProjectorBoldDuotoneIcon],svg[solar-projector-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 9.5a.75.75 0 1 0-1.5 0V11a.75.75 0 1 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 9A5 5 0 1 1 9 9a5 5 0 0 1 10 0m-5.75-2a.75.75 0 0 1 .75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 14a5 5 0 0 0 4.014-7.982c.757.023 1.364.077 1.863.2c.518.13.918.335 1.244.66C22 7.759 22 9.173 22 12s0 4.243-.879 5.121c-.547.547-1.301.754-2.475.832l.997 1.661a.75.75 0 1 1-1.286.772l-1.433-2.387L16 18H8l-.925-.001l-1.432 2.387a.75.75 0 1 1-1.286-.772l.997-1.661c-1.174-.078-1.928-.285-2.475-.832C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h2a5 5 0 0 0 4 8" opacity=".5"></svg:path>`,
})
export class SolarProjectorBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProjectorBrokenIcon],svg[solar-projector-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18 6.017c1.553.047 2.48.22 3.121.862c.49.49.707 1.146.803 2.121M10 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121C3.757 18 5.172 18 8 18h2m4 0h2c2.828 0 4.243 0 5.121-.879c.769-.768.865-1.946.877-4.121"></svg:path><svg:path fill="currentColor" d="M18.33 20.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"></svg:path><svg:circle cx="14" cy="9" r="5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 9a2 2 0 1 0 2-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9.5V11"></svg:path></svg:g>`,
})
export class SolarProjectorBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProjectorLineDuotoneIcon],svg[solar-projector-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M18 6.017c1.553.047 2.48.22 3.121.862C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18H8c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h2"></svg:path><svg:path fill="currentColor" d="M18.33 20.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z" opacity=".6"></svg:path><svg:circle cx="14" cy="9" r="5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 9a2 2 0 1 0 2-2" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9.5V11"></svg:path></svg:g>`,
})
export class SolarProjectorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProjectorLinearIcon],svg[solar-projector-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M18 6.017c1.553.047 2.48.22 3.121.862C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18H8c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h2"></svg:path><svg:path fill="currentColor" d="M18.33 20.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"></svg:path><svg:circle cx="14" cy="9" r="5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 9a2 2 0 1 0 2-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 9.5V11"></svg:path></svg:g>`,
})
export class SolarProjectorLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProjectorOutlineIcon],svg[solar-projector-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.588 6.465a4.25 4.25 0 1 0 6.888.088a.8.8 0 0 1-.14-.186A4.24 4.24 0 0 0 14 4.75a4.24 4.24 0 0 0-3.412 1.715m-1.881.285a5.75 5.75 0 1 0 10.638.126c.63.101.984.271 1.246.533c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191s-.002 2.437-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103H8c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191s.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399c.277-.277.665-.457 1.4-.556C5.562 6.752 6.564 6.75 8 6.75zm.934-1.5H7.945c-1.367 0-2.47 0-3.337.117c-.9.12-1.658.38-2.26.981c-.602.602-.86 1.36-.981 2.26c-.117.867-.117 1.97-.117 3.337v.11c0 1.367 0 2.47.117 3.337c.12.9.38 1.658.981 2.26c.602.602 1.36.86 2.26.982q.11.015.223.026l-.502 1.005a.75.75 0 1 0 1.342.67l.796-1.592q.68.009 1.478.007h8.11q.797.002 1.478-.007l.796 1.592a.75.75 0 1 0 1.342-.67l-.502-1.005l.223-.026c.9-.122 1.658-.38 2.26-.982s.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.803-.802-1.895-1.003-3.266-1.067A5.74 5.74 0 0 0 14 3.25a5.74 5.74 0 0 0-4.359 2M13.25 7a.75.75 0 0 1 .75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75M5.5 8.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarProjectorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulse2BoldIcon],svg[solar-pulse-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 .819 0 1.566.008 2.25h3.1c.526 0 .993-.002 1.421.182s.75.522 1.112.904l.075.078l1.141 1.199l.207.215l.177-.241l3.653-5.043c.15-.206.304-.42.458-.579c.175-.18.447-.394.842-.412s.685.17.876.333c.167.144.341.343.508.534l1.804 2.062c.486.555.59.65.703.701s.253.067.99.067h2.917A199 199 0 0 0 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"></svg:path><svg:path fill="currentColor" d="M21.956 15.75h-2.994c-.556.001-1.05.002-1.497-.201s-.771-.575-1.137-.994l-.075-.086l-1.777-2.03l-.206-.234q-.078.103-.184.251l-3.654 5.042a5 5 0 0 1-.442.56c-.17.177-.434.384-.816.41s-.67-.145-.863-.298a5 5 0 0 1-.513-.495l-1.169-1.227c-.48-.505-.582-.59-.69-.637c-.11-.047-.242-.061-.939-.061H2.044c.097 2.34.41 3.775 1.42 4.785C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.01-1.01 1.324-2.445 1.421-4.785"></svg:path>`,
})
export class SolarPulse2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulse2BoldDuotoneIcon],svg[solar-pulse-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 .819 0 1.566.008 2.25h3.1c.526 0 .993-.002 1.421.182s.75.522 1.112.904l.075.078l1.141 1.199a.25.25 0 0 0 .384-.026l3.653-5.043c.15-.206.304-.42.458-.579c.175-.18.447-.394.842-.412s.685.17.876.333c.167.144.341.343.508.534l1.804 2.062c.486.555.59.65.703.701s.253.067.99.067h2.917A199 199 0 0 0 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.008 14.25c.036 3.255.246 5.075 1.457 6.285C4.929 22 7.286 22 12 22s7.071 0 8.536-1.465c1.21-1.21 1.42-3.03 1.456-6.285h-2.916c-.738 0-.878-.016-.99-.067c-.114-.052-.218-.146-.704-.702L15.58 11.42c-.168-.191-.342-.39-.509-.534c-.191-.164-.482-.352-.876-.333c-.395.018-.667.231-.842.412a5.5 5.5 0 0 0-.457.578L9.24 16.587a.25.25 0 0 1-.384.025l-1.141-1.198l-.075-.079c-.362-.381-.683-.72-1.112-.903c-.428-.184-.895-.183-1.421-.182h-3.1"></svg:path>`,
})
export class SolarPulse2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulse2BrokenIcon],svg[solar-pulse-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 15h3c.634 0 .95 0 1.234.121c.283.122.501.351.938.81l1.142 1.199c.384.403.576.605.81.59c.234-.017.397-.242.724-.693l3.63-5.01c.34-.47.51-.704.75-.715c.24-.01.431.207.813.643l1.777 2.03c.441.505.662.757.957.891c.296.134.63.134 1.3.134H22"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarPulse2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulse2LineDuotoneIcon],svg[solar-pulse-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 15h3c.634 0 .95 0 1.234.121c.283.122.501.351.938.81l1.142 1.199c.384.403.576.605.81.59c.234-.017.397-.242.724-.693l3.63-5.01c.34-.47.51-.704.75-.715c.24-.01.431.207.813.643l1.777 2.03c.441.505.662.757.957.891c.296.134.63.134 1.3.134H22"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPulse2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulse2LinearIcon],svg[solar-pulse-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 15h3c.634 0 .95 0 1.234.121c.283.122.501.351.938.81l1.142 1.199c.384.403.576.605.81.59c.234-.017.397-.242.724-.693l3.63-5.01c.34-.47.51-.704.75-.715c.24-.01.431.207.813.643l1.777 2.03c.441.505.662.757.957.891c.296.134.63.134 1.3.134H22"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarPulse2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulse2OutlineIcon],svg[solar-pulse-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 1.024 0 1.95.017 2.786a.75.75 0 0 0 .008.348c.024.904.071 1.698.165 2.395c.194 1.445.6 2.585 1.494 3.48c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.094-.697.141-1.491.165-2.395a.75.75 0 0 0 .008-.348c.017-.836.017-1.762.017-2.786v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zm9.3 13c.007-.676.007-1.423.007-2.25c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069c-.569.57-.896 1.34-1.068 2.619c-.174 1.3-.176 3.008-.176 5.386c0 .827 0 1.574.008 2.25h2.35c.526 0 .993-.002 1.421.182s.75.522 1.112.904l.075.078l1.141 1.199l.207.215l.177-.241l3.653-5.043c.15-.206.304-.42.458-.579c.175-.18.447-.394.842-.412s.685.17.876.333c.167.144.341.343.508.534l1.804 2.062c.486.555.59.65.703.701s.253.067.99.067zm-18.449 1.5c.026.611.067 1.152.132 1.636c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619a18 18 0 0 0 .132-1.636h-2.244c-.556.001-1.05.002-1.497-.201s-.771-.575-1.137-.994l-.075-.086l-1.777-2.03l-.206-.234q-.078.103-.184.251l-3.654 5.042a5 5 0 0 1-.442.56c-.17.177-.434.384-.816.41s-.67-.145-.863-.298a5 5 0 0 1-.513-.495l-1.169-1.227c-.48-.505-.582-.59-.69-.637c-.11-.047-.242-.061-.939-.061z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPulse2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulseBoldIcon],svg[solar-pulse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m11.635 8.63c-.184-.302-.365-.597-.541-.807c-.187-.224-.515-.532-1.017-.512s-.804.353-.973.591c-.159.225-.315.532-.475.848l-1.988 3.92q-.11.22-.193.377l-.238-.351l-.176-.266a11 11 0 0 0-.557-.788a2.2 2.2 0 0 0-.682-.59a2.2 2.2 0 0 0-.87-.24c-.272-.026-.597-.026-.964-.026H5a.75.75 0 0 0 0 1.5h1.394c.407 0 .661 0 .856.019c.18.017.254.044.301.07c.047.025.111.07.225.211c.123.152.265.363.49.702l.187.279c.188.283.373.56.553.759c.192.213.522.497 1.01.468c.486-.029.78-.35.947-.584c.154-.219.305-.517.459-.82l1.987-3.918q.117-.23.203-.395q.1.158.233.377l.654 1.068c.2.327.378.616.55.844c.186.247.399.469.692.633s.593.23.901.26c.284.027.623.027 1.006.027H19a.75.75 0 0 0 0-1.5h-1.32c-.424 0-.69 0-.894-.02c-.188-.019-.264-.049-.312-.076c-.049-.027-.114-.076-.227-.227c-.124-.163-.263-.39-.485-.752z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPulseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulseBoldDuotoneIcon],svg[solar-pulse-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.1 12.094c-.185-.302-.366-.597-.542-.807c-.187-.224-.515-.532-1.017-.512s-.804.353-.973.591c-.159.225-.315.532-.475.848l-1.988 3.92q-.11.22-.193.377l-.238-.351l-.176-.266a11 11 0 0 0-.557-.788a2.2 2.2 0 0 0-.682-.59a2.2 2.2 0 0 0-.87-.24a11 11 0 0 0-.964-.026H5a.75.75 0 1 0 0 1.5h1.394c.407 0 .661 0 .856.019c.18.017.254.044.301.07c.047.025.111.07.225.211c.123.152.265.363.49.702l.187.279c.188.283.373.56.553.759c.192.213.522.497 1.01.468c.486-.029.78-.35.947-.584c.154-.219.305-.517.459-.82l1.987-3.918q.117-.23.203-.395q.1.158.233.377l.654 1.068c.2.327.378.616.55.844c.186.247.399.469.692.633s.593.23.901.26c.284.027.623.027 1.006.027H19a.75.75 0 0 0 0-1.5h-1.32c-.424 0-.69 0-.894-.02c-.188-.019-.264-.049-.312-.076c-.049-.027-.114-.076-.227-.227a11 11 0 0 1-.485-.752z"></svg:path>`,
})
export class SolarPulseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulseBrokenIcon],svg[solar-pulse-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M5 15h1.394c.786 0 1.18 0 1.511.177c.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933c.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071c.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243c.342.19.752.19 1.573.19H19"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarPulseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulseLineDuotoneIcon],svg[solar-pulse-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 15h1.394c.786 0 1.18 0 1.511.177c.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933c.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071c.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243c.342.19.752.19 1.573.19H19"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPulseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulseLinearIcon],svg[solar-pulse-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 15h1.394c.786 0 1.18 0 1.511.177c.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933c.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071c.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243c.342.19.752.19 1.573.19H19"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarPulseLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulseOutlineIcon],svg[solar-pulse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.1 12.094c-.185-.302-.366-.597-.542-.807c-.187-.224-.515-.532-1.017-.512s-.804.353-.973.591c-.159.225-.315.532-.475.848l-1.988 3.92q-.11.22-.193.377l-.238-.351l-.176-.266a11 11 0 0 0-.557-.788a2.2 2.2 0 0 0-.682-.59a2.2 2.2 0 0 0-.87-.24c-.272-.026-.597-.026-.964-.026H5a.75.75 0 0 0 0 1.5h1.394c.407 0 .661 0 .856.019c.18.017.254.044.301.07c.047.025.111.07.225.211c.123.152.265.363.49.702l.187.279c.188.283.373.56.553.759c.192.213.522.497 1.01.468c.486-.029.78-.35.947-.584c.154-.219.305-.517.459-.82l1.987-3.918q.117-.23.203-.395q.1.158.233.377l.654 1.068c.2.327.378.616.55.844c.186.247.399.469.692.633s.593.23.901.26c.284.027.623.027 1.006.027H19a.75.75 0 0 0 0-1.5h-1.32c-.424 0-.69 0-.894-.02c-.188-.019-.264-.049-.312-.076c-.049-.027-.114-.076-.227-.227c-.124-.163-.263-.39-.485-.752z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarPulseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQrCodeBoldIcon],svg[solar-qr-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.525 2h.068c.884 0 1.597 0 2.17.055c.592.056 1.108.175 1.571.459c.47.288.864.682 1.152 1.152c.284.463.403.979.46 1.57C22 5.81 22 6.524 22 7.407v.07c0 .58 0 1.064-.037 1.458c-.04.412-.124.795-.34 1.147c-.21.344-.5.633-.844.844c-.352.216-.736.3-1.147.34c-.394.037-.879.037-1.46.037h-1.104c-.836 0-1.533 0-2.086-.074c-.584-.079-1.111-.251-1.535-.675s-.596-.95-.675-1.535c-.074-.553-.074-1.25-.074-2.086V5.827c0-.58 0-1.065.037-1.459c.04-.411.124-.795.34-1.146c.21-.345.5-.634.844-.845c.352-.216.735-.3 1.147-.34C15.459 2 15.944 2 16.525 2m.824 5.814c-.48 0-.72 0-.889-.12a.7.7 0 0 1-.154-.154c-.12-.17-.12-.41-.12-.889s0-.719.12-.888a.7.7 0 0 1 .154-.155c.17-.12.41-.12.889-.12s.719 0 .888.12q.09.065.155.155c.12.169.12.409.12.888s0 .72-.12.889a.7.7 0 0 1-.155.154c-.169.12-.409.12-.888.12M10.08 2.377c-.35-.216-.734-.3-1.146-.34C8.54 2 8.056 2 7.475 2h-.068c-.884 0-1.597 0-2.17.055c-.592.056-1.108.175-1.571.459c-.47.288-.864.682-1.152 1.152c-.284.463-.403.979-.46 1.57C2 5.81 2 6.524 2 7.407v.07c0 .58 0 1.064.037 1.458c.04.412.124.795.34 1.147c.21.344.5.633.845.844c.351.216.735.3 1.146.34c.394.037.878.037 1.46.037h1.104c.836 0 1.533 0 2.086-.074c.584-.079 1.111-.251 1.535-.675s.596-.95.675-1.535c.074-.553.074-1.25.074-2.086V5.827c0-.58 0-1.065-.037-1.459c-.04-.411-.124-.795-.34-1.146a2.56 2.56 0 0 0-.844-.845M5.764 7.694c.169.12.409.12.888.12s.72 0 .889-.12a.7.7 0 0 0 .154-.154c.12-.17.12-.41.12-.889s0-.719-.12-.888a.7.7 0 0 0-.154-.155c-.17-.12-.41-.12-.889-.12s-.719 0-.888.12a.7.7 0 0 0-.155.155c-.12.169-.12.409-.12.888s0 .72.12.889a.7.7 0 0 0 .155.154m3.254 5.078c.584.079 1.111.251 1.535.675s.596.95.675 1.535c.074.553.074 1.25.074 2.086v1.105c0 .58 0 1.065-.037 1.459c-.04.411-.124.795-.34 1.146c-.21.345-.5.634-.844.845c-.352.216-.735.3-1.147.34C8.54 22 8.056 22 7.475 22h-.068c-.884 0-1.597 0-2.17-.055c-.592-.056-1.108-.175-1.571-.459a3.5 3.5 0 0 1-1.152-1.152c-.284-.463-.403-.979-.46-1.57C2 18.19 2 17.477 2 16.594v-.07c0-.58 0-1.065.037-1.458c.04-.412.124-.795.34-1.147c.21-.344.5-.633.845-.844c.351-.216.735-.3 1.146-.34c.394-.037.878-.037 1.46-.037h1.104c.836 0 1.533 0 2.086.074m-2.367 5.74c-.48 0-.719 0-.888-.12a.7.7 0 0 1-.155-.155c-.12-.169-.12-.409-.12-.888s0-.72.12-.889a.7.7 0 0 1 .155-.154c.169-.12.409-.12.888-.12s.72 0 .889.12q.09.065.154.154c.12.17.12.41.12.889s0 .719-.12.888a.7.7 0 0 1-.154.155c-.17.12-.41.12-.889.12" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.698 16.616v.035h1.395c0-.668 0-1.116.036-1.458c.033-.33.093-.482.16-.583a1.2 1.2 0 0 1 .32-.321c.102-.067.254-.127.584-.16c.342-.035.79-.036 1.458-.036h1.86v-1.395h-1.895c-.623 0-1.143 0-1.564.042c-.44.045-.849.143-1.217.389c-.28.186-.52.426-.706.706c-.246.368-.344.777-.389 1.217c-.042.42-.042.94-.042 1.564M22 18.535v-.023h-1.395c0 .443 0 .74-.016.97c-.016.224-.043.333-.073.405a1.16 1.16 0 0 1-.63.63c-.07.029-.18.056-.404.072c-.23.015-.527.016-.97.016h-1.86V22h1.883c.414 0 .759 0 1.042-.02a2.6 2.6 0 0 0 .844-.175a2.56 2.56 0 0 0 1.384-1.384c.112-.27.156-.549.176-.844c.019-.283.019-.628.019-1.042m-7.907 2.767a.698.698 0 1 1-1.395 0v-2.79h1.395zm7.209-8.604a.7.7 0 0 0-.697.697v3.256H22v-3.256a.7.7 0 0 0-.698-.697m-5.226 3.919c-.076.184-.076.417-.076.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C18.199 16 17.966 16 17.5 16s-.699 0-.883.076a1 1 0 0 0-.54.541"></svg:path>`,
})
export class SolarQrCodeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQrCodeBoldDuotoneIcon],svg[solar-qr-code-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.553 13.447c-.424-.424-.95-.596-1.535-.675c-.553-.074-1.25-.074-2.086-.074H5.827c-.58 0-1.065 0-1.459.037c-.411.04-.795.124-1.146.34c-.345.21-.634.5-.845.844c-.216.352-.3.735-.34 1.147C2 15.459 2 15.944 2 16.525v.068c0 .884 0 1.597.055 2.17c.056.592.175 1.108.459 1.571c.288.47.682.864 1.152 1.152c.463.284.979.403 1.57.46C5.81 22 6.524 22 7.407 22h.07c.58 0 1.064 0 1.458-.037c.412-.04.795-.124 1.147-.34c.344-.21.633-.5.844-.844c.216-.352.3-.736.34-1.147c.037-.394.037-.879.037-1.46v-1.104c0-.836 0-1.533-.074-2.086c-.079-.584-.251-1.111-.675-1.535m-1.62-11.41c.412.04.795.124 1.147.34c.344.21.633.5.844.845c.216.351.3.735.34 1.146c.037.394.037.879.037 1.46v1.104c0 .836 0 1.533-.074 2.086c-.079.584-.251 1.111-.675 1.535s-.95.596-1.535.675c-.553.074-1.25.074-2.086.074H5.827c-.58 0-1.065 0-1.459-.037c-.411-.04-.795-.124-1.146-.34a2.56 2.56 0 0 1-.845-.844c-.216-.352-.3-.735-.34-1.147C2 8.54 2 8.056 2 7.475v-.068c0-.884 0-1.597.055-2.17c.056-.592.175-1.108.459-1.571c.288-.47.682-.864 1.152-1.152c.463-.284.979-.403 1.57-.46C5.81 2 6.524 2 7.407 2h.07c.58 0 1.064 0 1.458.037M16.593 2h-.068c-.58 0-1.065 0-1.46.037c-.41.04-.794.124-1.146.34c-.344.21-.633.5-.844.845c-.216.351-.3.735-.34 1.146c-.037.394-.037.879-.037 1.46v1.104c0 .836 0 1.533.074 2.086c.079.584.251 1.111.675 1.535s.95.596 1.535.675c.553.074 1.25.074 2.086.074h1.105c.58 0 1.065 0 1.459-.037c.411-.04.795-.124 1.146-.34c.345-.21.634-.5.845-.844c.216-.352.3-.735.34-1.147C22 8.54 22 8.056 22 7.475v-.068c0-.884 0-1.597-.055-2.17c-.056-.592-.175-1.108-.459-1.571a3.5 3.5 0 0 0-1.152-1.152c-.463-.284-.979-.403-1.57-.46C18.19 2 17.477 2 16.594 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.093 21.302a.698.698 0 1 1-1.396 0v-2.79h1.396z" opacity=".4"></svg:path><svg:path fill="currentColor" d="M21.302 12.698a.7.7 0 0 0-.697.697v3.256H22v-3.256a.7.7 0 0 0-.698-.697" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.076 16.617c-.076.184-.076.417-.076.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C18.199 16 17.966 16 17.5 16s-.699 0-.883.076a1 1 0 0 0-.54.541"></svg:path><svg:path fill="currentColor" d="M22 18.535v-.023h-1.396c0 .443 0 .74-.016.97c-.015.224-.043.333-.073.405a1.16 1.16 0 0 1-.629.63c-.072.029-.18.056-.405.072c-.23.015-.527.016-.97.016h-1.86V22h1.883c.414 0 .759 0 1.042-.02a2.6 2.6 0 0 0 .844-.175a2.56 2.56 0 0 0 1.384-1.384c.112-.27.156-.549.176-.844c.02-.283.02-.628.02-1.042" opacity=".7"></svg:path><svg:path fill="currentColor" d="M12.697 16.616v.035h1.396c0-.668 0-1.116.035-1.458c.034-.33.093-.482.16-.583a1.2 1.2 0 0 1 .321-.32c.101-.068.254-.128.584-.161c.342-.035.79-.036 1.458-.036h1.86v-1.395h-1.896c-.623 0-1.142 0-1.563.043c-.44.044-.85.142-1.218.388c-.28.187-.519.426-.706.706c-.246.368-.343.777-.388 1.217c-.043.421-.043.94-.043 1.564" opacity=".6"></svg:path><svg:path fill="currentColor" d="M5.508 18.69c.219.155.528.155 1.146.155c.619 0 .928 0 1.146-.155a.8.8 0 0 0 .2-.199c.154-.218.154-.527.154-1.146s0-.927-.155-1.146A.8.8 0 0 0 7.8 16c-.218-.155-.527-.155-1.146-.155s-.927 0-1.146.155a.8.8 0 0 0-.199.2c-.155.218-.155.527-.155 1.145c0 .619 0 .928.155 1.146a.8.8 0 0 0 .2.2M6.654 8.155c-.618 0-.927 0-1.146-.155a.8.8 0 0 1-.199-.2c-.155-.217-.155-.527-.155-1.145c0-.619 0-.928.155-1.146a.8.8 0 0 1 .2-.2c.218-.154.527-.154 1.145-.154c.619 0 .928 0 1.146.155a.8.8 0 0 1 .2.199c.154.218.154.527.154 1.146s0 .928-.155 1.146A.8.8 0 0 1 7.8 8c-.218.155-.527.155-1.146.155M16.2 8c.218.155.527.155 1.146.155s.927 0 1.146-.155a.8.8 0 0 0 .199-.199c.155-.218.155-.528.155-1.146c0-.619 0-.928-.155-1.146a.8.8 0 0 0-.2-.2c-.218-.154-.527-.154-1.145-.154c-.619 0-.928 0-1.146.155a.8.8 0 0 0-.2.199c-.154.218-.154.527-.154 1.146s0 .928.155 1.146A.8.8 0 0 0 16.2 8"></svg:path>`,
})
export class SolarQrCodeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQrCodeBrokenIcon],svg[solar-qr-code-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 16.9c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66c.48-.295 1.136-.295 2.445-.295h1.1c1.886 0 2.828 0 3.414.586s.586 1.528.586 3.414v1.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66C9.065 22 8.409 22 7.1 22c-1.964 0-2.946 0-3.667-.442a3 3 0 0 1-.99-.99M22 7.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66c-.48.295-1.136.295-2.445.295h-1.1c-1.886 0-2.828 0-3.414-.586S13.5 8.386 13.5 6.5V5.4c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66C14.935 2 15.591 2 16.9 2c1.964 0 2.946 0 3.668.442a3 3 0 0 1 .99.99"></svg:path><svg:path fill="currentColor" d="M16.5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C16.977 5 17.235 5 17.75 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165c-.129-.182-.129-.44-.129-.955M12.75 22a.75.75 0 0 0 1.5 0zm1.639-8.163l.417.624zm-.552.552l-.623-.417zM19 12.75h-2v1.5h2zM12.75 19v3h1.5v-3zM17 12.75c-.687 0-1.258 0-1.719.046c-.474.048-.913.153-1.309.418l.834 1.247c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM14.25 17c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.835-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.786c-.3.2-.558.458-.758.758l1.247.834a1.3 1.3 0 0 1 .345-.345zm8.778.286a.75.75 0 0 0-1.5 0zm-1.985 8.348l.287.693zm1.083-1.083l-.693-.287zM17 22.75h2v-1.5h-2zM22.75 17v-3.5h-1.5V17zM19 22.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017zM21.25 19c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907c.021-.31.021-.69.021-1.145zm-.198 3.54a2.75 2.75 0 0 0 1.489-1.488l-1.386-.574a1.25 1.25 0 0 1-.677.677z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 7.1c0-1.964 0-2.946.442-3.667a3 3 0 0 1 .99-.99C4.155 2 5.137 2 7.1 2c1.31 0 1.964 0 2.445.295a2 2 0 0 1 .66.66c.295.48.295 1.136.295 2.445v1.1c0 1.886 0 2.828-.586 3.414S8.386 10.5 6.5 10.5H5.4c-1.31 0-1.964 0-2.445-.295a2 2 0 0 1-.66-.66C2 9.065 2 8.409 2 7.1Z"></svg:path><svg:path fill="currentColor" d="M5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C5.477 5 5.735 5 6.25 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 7.023 5 6.765 5 6.25m0 11.5c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166c.182-.129.44-.129.955-.129s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166C7.023 19 6.765 19 6.25 19s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 18.523 5 18.265 5 17.75m11 0c0-.702 0-1.053.169-1.306a1 1 0 0 1 .275-.275C16.697 16 17.048 16 17.75 16s1.053 0 1.306.169a1 1 0 0 1 .275.275c.169.253.169.604.169 1.306s0 1.053-.169 1.306a1 1 0 0 1-.275.275c-.253.169-.604.169-1.306.169s-1.053 0-1.306-.169a1 1 0 0 1-.275-.275C16 18.803 16 18.452 16 17.75"></svg:path></svg:g>`,
})
export class SolarQrCodeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQrCodeLineDuotoneIcon],svg[solar-qr-code-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 16.9c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66c.48-.295 1.136-.295 2.445-.295h1.1c1.886 0 2.828 0 3.414.586s.586 1.528.586 3.414v1.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66C9.065 22 8.409 22 7.1 22c-1.964 0-2.946 0-3.667-.442a3 3 0 0 1-.99-.99C2 19.845 2 18.864 2 16.9ZM13.5 5.4c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66C14.935 2 15.591 2 16.9 2c1.964 0 2.946 0 3.668.442a3 3 0 0 1 .99.99C22 4.155 22 5.137 22 7.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66c-.48.295-1.136.295-2.445.295h-1.1c-1.886 0-2.828 0-3.414-.586S13.5 8.386 13.5 6.5z"></svg:path><svg:path fill="currentColor" d="M16.5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C16.977 5 17.235 5 17.75 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165c-.129-.182-.129-.44-.129-.955" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19 13.5h-2c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.337.504-.337 1.207-.337 2.611"></svg:path><svg:path fill="currentColor" d="M12.75 22a.75.75 0 0 0 1.5 0zm0-3v3h1.5v-3z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M17 22h2c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 20.398 22 19.932 22 19"></svg:path><svg:path fill="currentColor" d="M22.75 13.5a.75.75 0 0 0-1.5 0zm0 3.5v-3.5h-1.5V17z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 7.1c0-1.964 0-2.946.442-3.667a3 3 0 0 1 .99-.99C4.155 2 5.137 2 7.1 2c1.31 0 1.964 0 2.445.295a2 2 0 0 1 .66.66c.295.48.295 1.136.295 2.445v1.1c0 1.886 0 2.828-.586 3.414S8.386 10.5 6.5 10.5H5.4c-1.31 0-1.964 0-2.445-.295a2 2 0 0 1-.66-.66C2 9.065 2 8.409 2 7.1Z"></svg:path><svg:path fill="currentColor" d="M5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C5.477 5 5.735 5 6.25 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 7.023 5 6.765 5 6.25m0 11.5c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166c.182-.129.44-.129.955-.129s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166C7.023 19 6.765 19 6.25 19s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 18.523 5 18.265 5 17.75m11 0c0-.702 0-1.053.169-1.306a1 1 0 0 1 .275-.275C16.697 16 17.048 16 17.75 16s1.053 0 1.306.169a1 1 0 0 1 .275.275c.169.253.169.604.169 1.306s0 1.053-.169 1.306a1 1 0 0 1-.275.275c-.253.169-.604.169-1.306.169s-1.053 0-1.306-.169a1 1 0 0 1-.275-.275C16 18.803 16 18.452 16 17.75" opacity=".5"></svg:path></svg:g>`,
})
export class SolarQrCodeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQrCodeLinearIcon],svg[solar-qr-code-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 16.9c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66c.48-.295 1.136-.295 2.445-.295h1.1c1.886 0 2.828 0 3.414.586s.586 1.528.586 3.414v1.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66C9.065 22 8.409 22 7.1 22c-1.964 0-2.946 0-3.667-.442a3 3 0 0 1-.99-.99C2 19.845 2 18.864 2 16.9ZM13.5 5.4c0-1.31 0-1.964.295-2.445a2 2 0 0 1 .66-.66C14.935 2 15.591 2 16.9 2c1.964 0 2.946 0 3.668.442a3 3 0 0 1 .99.99C22 4.155 22 5.137 22 7.1c0 1.31 0 1.964-.295 2.445a2 2 0 0 1-.66.66c-.48.295-1.136.295-2.445.295h-1.1c-1.886 0-2.828 0-3.414-.586S13.5 8.386 13.5 6.5z"></svg:path><svg:path fill="currentColor" d="M16.5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C16.977 5 17.235 5 17.75 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165c-.129-.182-.129-.44-.129-.955M12.75 22a.75.75 0 0 0 1.5 0zm1.639-8.163l.417.624zm-.552.552l-.623-.417zM19 12.75h-2v1.5h2zM12.75 19v3h1.5v-3zM17 12.75c-.687 0-1.258 0-1.719.046c-.474.048-.913.153-1.309.418l.834 1.247c.108-.073.272-.137.627-.173c.367-.037.85-.038 1.567-.038zM14.25 17c0-.718 0-1.2.038-1.567c.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.835-.417 1.309c-.047.461-.046 1.032-.046 1.719zm-.278-3.786c-.3.2-.558.458-.758.758l1.247.834a1.3 1.3 0 0 1 .345-.345zm8.778.286a.75.75 0 0 0-1.5 0zm-1.985 8.348l.287.693zm1.083-1.083l-.693-.287zM17 22.75h2v-1.5h-2zM22.75 17v-3.5h-1.5V17zM19 22.75c.456 0 .835 0 1.145-.02c.317-.022.617-.069.907-.19l-.574-1.385c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017zM21.25 19c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435l1.386.574c.12-.29.167-.59.188-.907c.021-.31.021-.69.021-1.145zm-.198 3.54a2.75 2.75 0 0 0 1.489-1.488l-1.386-.574a1.25 1.25 0 0 1-.677.677z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 7.1c0-1.964 0-2.946.442-3.667a3 3 0 0 1 .99-.99C4.155 2 5.137 2 7.1 2c1.31 0 1.964 0 2.445.295a2 2 0 0 1 .66.66c.295.48.295 1.136.295 2.445v1.1c0 1.886 0 2.828-.586 3.414S8.386 10.5 6.5 10.5H5.4c-1.31 0-1.964 0-2.445-.295a2 2 0 0 1-.66-.66C2 9.065 2 8.409 2 7.1Z"></svg:path><svg:path fill="currentColor" d="M5 6.25c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166C5.477 5 5.735 5 6.25 5s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166c-.182.129-.44.129-.955.129s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 7.023 5 6.765 5 6.25m0 11.5c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166c.182-.129.44-.129.955-.129s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166C7.023 19 6.765 19 6.25 19s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 18.523 5 18.265 5 17.75m11 0c0-.702 0-1.053.169-1.306a1 1 0 0 1 .275-.275C16.697 16 17.048 16 17.75 16s1.053 0 1.306.169a1 1 0 0 1 .275.275c.169.253.169.604.169 1.306s0 1.053-.169 1.306a1 1 0 0 1-.275.275c-.253.169-.604.169-1.306.169s-1.053 0-1.306-.169a1 1 0 0 1-.275-.275C16 18.803 16 18.452 16 17.75"></svg:path></svg:g>`,
})
export class SolarQrCodeLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQrCodeOutlineIcon],svg[solar-qr-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.13 5.295C5 5.477 5 5.735 5 6.25s0 .773.13.955a.7.7 0 0 0 .165.166c.182.129.44.129.955.129s.773 0 .955-.13a.7.7 0 0 0 .166-.165c.129-.182.129-.44.129-.955s0-.773-.13-.955a.7.7 0 0 0-.165-.166C7.023 5 6.765 5 6.25 5s-.773 0-.955.13a.7.7 0 0 0-.166.165"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.704 1.29c.443.042.855.134 1.233.365c.37.227.681.538.908.908c.231.378.323.79.365 1.233c.04.423.04.944.04 1.568v1.188c0 .898 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08H5.364c-.624 0-1.145 0-1.568-.04c-.443-.042-.855-.134-1.233-.365a2.75 2.75 0 0 1-.908-.908c-.231-.378-.323-.79-.365-1.233c-.04-.423-.04-.944-.04-1.568v-.074c0-.95 0-1.716.059-2.333c.06-.636.188-1.19.494-1.688A3.75 3.75 0 0 1 3.04 1.803c.498-.306 1.052-.434 1.688-.494c.617-.059 1.383-.059 2.333-.059h.074c.624 0 1.145 0 1.568.04m-.142 1.493C8.218 2.751 7.77 2.75 7.1 2.75c-.997 0-1.691 0-2.229.052c-.526.05-.824.143-1.047.28a2.25 2.25 0 0 0-.742.742c-.137.223-.23.521-.28 1.047C2.75 5.41 2.75 6.103 2.75 7.1c0 .67 0 1.118.033 1.462c.032.333.088.488.151.591c.103.168.245.31.413.413c.103.063.258.119.59.15c.345.033.794.034 1.463.034h1.1c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095V5.4c0-.67 0-1.118-.033-1.462c-.032-.333-.088-.488-.151-.591a1.25 1.25 0 0 0-.413-.413c-.103-.063-.258-.119-.59-.15" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.63 5.295c-.13.182-.13.44-.13.955s0 .773.13.955a.7.7 0 0 0 .165.166c.182.129.44.129.955.129s.773 0 .955-.13a.7.7 0 0 0 .166-.165C19 7.023 19 6.765 19 6.25s0-.773-.13-.955a.7.7 0 0 0-.165-.166C18.523 5 18.265 5 17.75 5s-.773 0-.955.13a.7.7 0 0 0-.166.165"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.864 1.25h.074c.95 0 1.716 0 2.333.059c.636.06 1.19.188 1.688.494c.505.309.93.733 1.238 1.238c.306.498.434 1.052.494 1.688c.059.617.059 1.383.059 2.333v.074c0 .624 0 1.145-.04 1.568c-.042.443-.134.855-.365 1.233c-.227.37-.538.681-.908.908c-.378.231-.79.323-1.233.365c-.423.04-.944.04-1.568.04h-1.188c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242V5.364c0-.624 0-1.145.04-1.568c.042-.443.134-.855.365-1.233a2.75 2.75 0 0 1 .908-.908c.378-.231.79-.323 1.233-.365c.423-.04.944-.04 1.568-.04m-1.426 1.533c-.333.032-.488.088-.591.151a1.25 1.25 0 0 0-.413.413c-.063.103-.119.258-.15.59c-.033.345-.034.794-.034 1.463v1.1c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066h1.1c.67 0 1.118 0 1.462-.033c.333-.032.488-.088.591-.151a1.25 1.25 0 0 0 .413-.413c.063-.103.119-.258.15-.59c.033-.345.034-.794.034-1.463c0-.997 0-1.691-.052-2.229c-.05-.526-.143-.824-.28-1.047a2.25 2.25 0 0 0-.742-.742c-.223-.137-.521-.23-1.047-.28c-.538-.051-1.232-.052-2.229-.052c-.67 0-1.118 0-1.462.033" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5 17.75c0-.515 0-.773.13-.955a.7.7 0 0 1 .165-.166c.182-.129.44-.129.955-.129s.773 0 .955.13a.7.7 0 0 1 .166.165c.129.182.129.44.129.955s0 .773-.13.955a.7.7 0 0 1-.165.166C7.023 19 6.765 19 6.25 19s-.773 0-.955-.13a.7.7 0 0 1-.166-.165C5 18.523 5 18.265 5 17.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.794 12.83c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v1.188c0 .624 0 1.145-.04 1.568c-.042.442-.134.855-.365 1.233c-.227.37-.538.681-.908.908c-.378.232-.79.323-1.233.365c-.423.04-.944.04-1.568.04h-.074c-.95 0-1.716 0-2.333-.059c-.636-.06-1.19-.188-1.688-.494a3.75 3.75 0 0 1-1.238-1.238c-.306-.498-.434-1.052-.494-1.688c-.059-.617-.059-1.383-.059-2.333v-.074c0-.624 0-1.145.04-1.568c.042-.442.134-.855.365-1.233a2.75 2.75 0 0 1 .908-.908c.378-.231.79-.323 1.233-.365c.423-.04.944-.04 1.568-.04h1.188c.898 0 1.648 0 2.242.08m-.2 1.486c-.482-.064-1.13-.066-2.094-.066H5.4c-.67 0-1.118 0-1.462.034c-.333.031-.488.087-.591.15a1.25 1.25 0 0 0-.413.413c-.063.103-.119.258-.15.59c-.033.345-.034.794-.034 1.463c0 .997 0 1.691.052 2.229c.05.526.143.824.28 1.047c.185.302.44.557.742.742c.223.137.521.23 1.047.28c.538.051 1.232.052 2.229.052c.67 0 1.118 0 1.462-.034c.333-.031.488-.087.591-.15a1.25 1.25 0 0 0 .413-.413c.063-.103.119-.258.15-.59c.033-.345.034-.794.034-1.463v-1.1c0-.964-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.962 12.75H19v1.5h-2c-.718 0-1.2 0-1.567.038c-.355.036-.519.1-.627.173a1.3 1.3 0 0 0-.345.345c-.073.108-.137.272-.173.627c-.037.367-.038.85-.038 1.567h-1.5v-.038c0-.67 0-1.229.046-1.681c.048-.474.153-.913.418-1.309c.2-.3.458-.558.758-.758c.396-.265.835-.37 1.309-.418c.452-.046 1.011-.046 1.68-.046M12.75 22v-3h1.5v3a.75.75 0 0 1-1.5 0m10-8.5a.75.75 0 0 0-1.5 0V17h1.5zm-1.5 5.5c0 .476 0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078c-.247.017-.567.017-1.043.017h-2v1.5h2.025c.445 0 .816 0 1.12-.02c.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907c.021-.304.021-.675.021-1.12V19zm-5.081-2.556C16 16.697 16 17.048 16 17.75s0 1.053.169 1.306a1 1 0 0 0 .275.275c.253.169.604.169 1.306.169s1.053 0 1.306-.169a1 1 0 0 0 .275-.275c.169-.253.169-.604.169-1.306s0-1.053-.169-1.306a1 1 0 0 0-.275-.275C18.803 16 18.452 16 17.75 16s-1.053 0-1.306.169a1 1 0 0 0-.275.275"></svg:path>`,
})
export class SolarQrCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionCircleBoldIcon],svg[solar-question-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuestionCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionCircleBoldDuotoneIcon],svg[solar-question-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarQuestionCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionCircleBrokenIcon],svg[solar-question-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarQuestionCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionCircleLineDuotoneIcon],svg[solar-question-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarQuestionCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionCircleLinearIcon],svg[solar-question-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarQuestionCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionCircleOutlineIcon],svg[solar-question-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 3.96 2.26a1.9 1.9 0 0 0-.465.369c-.102.12-.12.2-.12.246V13a.75.75 0 0 1-1.5 0v-1.25c0-.506.222-.916.477-1.217c.252-.297.566-.524.845-.689A1.124 1.124 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuestionCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionSquareBoldIcon],svg[solar-question-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m0-14.25c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuestionSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionSquareBoldDuotoneIcon],svg[solar-question-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarQuestionSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionSquareBrokenIcon],svg[solar-question-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarQuestionSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionSquareLineDuotoneIcon],svg[solar-question-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarQuestionSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionSquareLinearIcon],svg[solar-question-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></svg:path><svg:circle cx="12" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarQuestionSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionSquareOutlineIcon],svg[solar-question-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 3.96 2.26a1.9 1.9 0 0 0-.465.369c-.102.12-.12.2-.12.246V13a.75.75 0 0 1-1.5 0v-1.25c0-.506.222-.916.477-1.217c.252-.297.566-.524.845-.689A1.124 1.124 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuestionSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenBoldIcon],svg[solar-quit-full-screen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 1.25a.75.75 0 0 1 .75.75c0 1.907.002 3.261.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.027.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V2a.75.75 0 0 1 .75-.75m-4 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H2a.75.75 0 0 1 0-1.5c1.907 0 3.261-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289a.75.75 0 0 1 .75-.75M1.25 14a.75.75 0 0 1 .75-.75h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V22a.75.75 0 0 1-1.5 0c0-1.907-.002-3.262-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14a.75.75 0 0 1-.75-.75m20.694-.75H22a.75.75 0 0 1 0 1.5c-1.907 0-3.262.002-4.29.14c-1.005.135-1.585.389-2.008.812s-.677 1.003-.812 2.009c-.138 1.027-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenBoldDuotoneIcon],svg[solar-quit-full-screen-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 1.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H2a.75.75 0 0 1 0-1.5c1.907 0 3.261-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289a.75.75 0 0 1 .75-.75m11.944 12H22a.75.75 0 0 1 0 1.5c-1.907 0-3.262.002-4.29.14c-1.005.135-1.585.389-2.008.812s-.677 1.003-.812 2.009c-.138 1.027-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14 1.25a.75.75 0 0 1 .75.75c0 1.907.002 3.261.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.027.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V2a.75.75 0 0 1 .75-.75M1.25 14a.75.75 0 0 1 .75-.75h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V22a.75.75 0 0 1-1.5 0c0-1.907-.002-3.262-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path>`,
})
export class SolarQuitFullScreenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenBrokenIcon],svg[solar-quit-full-screen-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22M2 10c1.17 0 2.158 0 3-.035M10 2c0 3.771 0 5.657-1.172 6.828M14 22c0-3.771 0-5.657 1.172-6.828M22 14c-1.17 0-2.158 0-3 .035M22 10c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2"></svg:path>`,
})
export class SolarQuitFullScreenBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleBoldIcon],svg[solar-quit-full-screen-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M10.004 5.251a.75.75 0 0 1 .743.756c-.007.851-.033 1.577-.151 2.18c-.122.623-.352 1.166-.798 1.612s-.99.676-1.613.798c-.602.118-1.328.144-2.179.151a.75.75 0 1 1-.012-1.5c.856-.007 1.453-.035 1.903-.123c.429-.084.666-.212.84-.387c.175-.174.303-.411.387-.84c.088-.45.116-1.048.123-1.903a.75.75 0 0 1 .757-.744m3.99 0a.75.75 0 0 1 .756.744c.007.855.035 1.453.123 1.903c.084.429.213.666.387.84c.174.175.411.303.84.387c.45.088 1.048.116 1.904.123a.75.75 0 0 1-.013 1.5c-.85-.007-1.577-.033-2.18-.151c-.623-.122-1.166-.352-1.612-.798s-.675-.99-.798-1.613c-.118-.602-.144-1.328-.151-2.179a.75.75 0 0 1 .743-.756m-7.988 8a.75.75 0 0 0-.012 1.5c.856.007 1.453.035 1.903.123c.429.084.666.212.84.386c.175.175.303.412.387.84c.088.45.116 1.048.123 1.904a.75.75 0 0 0 1.5-.013c-.007-.85-.033-1.576-.151-2.179c-.122-.623-.352-1.166-.798-1.612s-.99-.676-1.613-.798c-.602-.118-1.328-.144-2.179-.152m12.741.743a.75.75 0 0 1-.743.756c-.856.008-1.454.036-1.904.124c-.429.084-.666.212-.84.386c-.175.175-.303.412-.387.84c-.088.45-.116 1.048-.123 1.904a.75.75 0 1 1-1.5-.013c.007-.85.033-1.576.151-2.179c.123-.623.352-1.166.798-1.612s.99-.676 1.613-.798c.602-.118 1.328-.144 2.179-.152a.75.75 0 0 1 .756.744" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleBoldDuotoneIcon],svg[solar-quit-full-screen-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.25 13.994a.75.75 0 0 1 .756-.744c.851.008 1.577.034 2.18.152c.623.122 1.166.352 1.612.798s.676.989.798 1.612c.118.603.144 1.329.151 2.18a.75.75 0 0 1-1.5.012c-.007-.856-.035-1.454-.123-1.903c-.084-.43-.212-.666-.387-.84c-.174-.175-.411-.303-.84-.387c-.45-.088-1.047-.116-1.903-.124a.75.75 0 0 1-.744-.756m4.754-8.743a.75.75 0 0 1 .743.756c-.007.851-.033 1.577-.151 2.18c-.122.623-.352 1.166-.798 1.612s-.99.676-1.613.798c-.602.118-1.328.144-2.179.151a.75.75 0 1 1-.012-1.5c.856-.007 1.453-.035 1.903-.123c.429-.084.666-.212.84-.387c.175-.174.303-.411.387-.84c.088-.45.116-1.048.123-1.903a.75.75 0 0 1 .757-.744m3.99 0a.75.75 0 0 1 .756.744c.007.855.035 1.453.123 1.903c.084.429.213.666.387.84c.174.175.411.303.84.387c.45.088 1.048.116 1.904.123a.75.75 0 0 1-.013 1.5c-.85-.007-1.577-.033-2.18-.151c-.623-.122-1.166-.352-1.612-.798s-.675-.99-.798-1.613c-.118-.602-.144-1.328-.151-2.179a.75.75 0 0 1 .743-.756m4.754 8.743a.75.75 0 0 1-.743.756c-.856.008-1.454.036-1.904.124c-.429.084-.666.212-.84.386c-.175.175-.303.412-.387.84c-.088.45-.116 1.048-.123 1.904a.75.75 0 1 1-1.5-.013c.007-.85.033-1.576.151-2.179c.123-.623.352-1.166.798-1.612s.99-.676 1.613-.798c.602-.118 1.328-.144 2.179-.152a.75.75 0 0 1 .756.744"></svg:path>`,
})
export class SolarQuitFullScreenCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleBrokenIcon],svg[solar-quit-full-screen-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarQuitFullScreenCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleLineDuotoneIcon],svg[solar-quit-full-screen-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarQuitFullScreenCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleLinearIcon],svg[solar-quit-full-screen-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class SolarQuitFullScreenCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleOutlineIcon],svg[solar-quit-full-screen-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m8.754-6.75a.75.75 0 0 1 .744.757c-.008.85-.034 1.576-.152 2.179c-.122.623-.352 1.166-.798 1.612s-.99.676-1.612.798c-.603.118-1.329.144-2.18.152a.75.75 0 1 1-.012-1.5c.856-.008 1.453-.036 1.903-.124c.429-.084.666-.212.84-.386c.175-.175.303-.412.387-.84c.088-.45.116-1.048.124-1.904a.75.75 0 0 1 .756-.744m3.99 0a.75.75 0 0 1 .756.744c.007.856.036 1.453.124 1.903c.084.429.212.666.386.84c.174.175.412.303.84.387c.45.088 1.048.116 1.904.124a.75.75 0 0 1-.013 1.5c-.85-.008-1.577-.034-2.179-.152c-.623-.122-1.167-.352-1.613-.798s-.675-.99-.797-1.612c-.118-.603-.145-1.329-.152-2.18a.75.75 0 0 1 .744-.756M5.25 13.994a.75.75 0 0 1 .757-.744c.85.007 1.576.034 2.179.152c.623.122 1.166.351 1.612.797s.676.99.798 1.613c.118.602.144 1.328.152 2.179a.75.75 0 0 1-1.5.013c-.008-.856-.036-1.454-.124-1.904c-.084-.428-.212-.666-.386-.84s-.412-.302-.84-.386c-.45-.088-1.048-.117-1.904-.124a.75.75 0 0 1-.744-.756m13.497 0a.75.75 0 0 1-.743.756c-.856.007-1.454.036-1.904.124c-.428.084-.666.212-.84.386s-.302.412-.386.84c-.088.45-.117 1.048-.124 1.904a.75.75 0 0 1-1.5-.013c.007-.85.034-1.577.152-2.179c.122-.623.351-1.167.797-1.613s.99-.675 1.613-.797c.602-.118 1.328-.145 2.179-.152a.75.75 0 0 1 .756.744" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenLineDuotoneIcon],svg[solar-quit-full-screen-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 22c0-3.771 0-5.657 1.172-6.828S18.229 14 22 14"></svg:path><svg:path d="M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22" opacity=".5"></svg:path><svg:path d="M2 10c3.771 0 5.657 0 6.828-1.172S10 5.771 10 2"></svg:path><svg:path d="M22 10c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarQuitFullScreenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenLinearIcon],svg[solar-quit-full-screen-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 22c0-3.771 0-5.657 1.172-6.828S18.229 14 22 14M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22M2 10c3.771 0 5.657 0 6.828-1.172S10 5.771 10 2m12 8c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2"></svg:path>`,
})
export class SolarQuitFullScreenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenOutlineIcon],svg[solar-quit-full-screen-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 1.25a.75.75 0 0 1 .75.75c0 1.907.002 3.261.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.027.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V2a.75.75 0 0 1 .75-.75m-4 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H2a.75.75 0 0 1 0-1.5c1.907 0 3.261-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289a.75.75 0 0 1 .75-.75M1.25 14a.75.75 0 0 1 .75-.75h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V22a.75.75 0 0 1-1.5 0c0-1.907-.002-3.262-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14a.75.75 0 0 1-.75-.75m20.694-.75H22a.75.75 0 0 1 0 1.5c-1.907 0-3.262.002-4.29.14c-1.005.135-1.585.389-2.008.812s-.677 1.003-.812 2.009c-.138 1.027-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenSquareBoldIcon],svg[solar-quit-full-screen-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m6.54 1.787a.75.75 0 0 1 .743.756c-.007.851-.033 1.577-.151 2.18c-.122.623-.352 1.166-.798 1.612s-.99.676-1.613.798c-.602.118-1.328.144-2.179.151a.75.75 0 1 1-.012-1.5c.856-.007 1.453-.035 1.903-.123c.429-.084.666-.212.84-.387c.175-.174.303-.411.387-.84c.088-.45.116-1.048.123-1.903a.75.75 0 0 1 .757-.744m3.99 0a.75.75 0 0 1 .756.744c.007.855.035 1.453.123 1.903c.084.429.213.666.387.84c.174.175.411.303.84.387c.45.088 1.048.116 1.904.123a.75.75 0 0 1-.013 1.5c-.85-.007-1.577-.033-2.18-.151c-.623-.122-1.166-.352-1.612-.798s-.675-.99-.798-1.613c-.118-.602-.144-1.328-.151-2.179a.75.75 0 0 1 .743-.756m-7.988 8a.75.75 0 0 0-.012 1.5c.856.007 1.453.035 1.903.123c.429.084.666.212.84.386c.175.175.303.412.387.84c.088.45.116 1.048.123 1.904a.75.75 0 0 0 1.5-.013c-.007-.85-.033-1.576-.151-2.179c-.122-.623-.352-1.166-.798-1.612s-.99-.676-1.613-.798c-.602-.118-1.328-.144-2.179-.152m12.741.743a.75.75 0 0 1-.743.756c-.856.008-1.454.036-1.904.124c-.429.084-.666.212-.84.386c-.175.175-.303.412-.387.84c-.088.45-.116 1.048-.123 1.904a.75.75 0 1 1-1.5-.013c.007-.85.033-1.576.151-2.179c.123-.623.352-1.166.798-1.612s.99-.676 1.613-.798c.602-.118 1.328-.144 2.179-.152a.75.75 0 0 1 .756.744" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenSquareBoldDuotoneIcon],svg[solar-quit-full-screen-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.25 13.994a.75.75 0 0 1 .756-.744c.851.008 1.577.034 2.18.152c.623.122 1.166.352 1.612.798s.676.989.798 1.612c.118.603.144 1.329.151 2.18a.75.75 0 0 1-1.5.012c-.007-.856-.035-1.454-.123-1.903c-.084-.43-.212-.666-.387-.84c-.174-.175-.411-.303-.84-.387c-.45-.088-1.047-.116-1.903-.124a.75.75 0 0 1-.744-.756m4.754-8.743a.75.75 0 0 1 .743.756c-.007.851-.033 1.577-.151 2.18c-.122.623-.352 1.166-.798 1.612s-.99.676-1.613.798c-.602.118-1.328.144-2.179.151a.75.75 0 1 1-.012-1.5c.856-.007 1.453-.035 1.903-.123c.429-.084.666-.212.84-.387c.175-.174.303-.411.387-.84c.088-.45.116-1.048.123-1.903a.75.75 0 0 1 .757-.744m3.99 0a.75.75 0 0 1 .756.744c.007.855.035 1.453.123 1.903c.084.429.213.666.387.84c.174.175.411.303.84.387c.45.088 1.048.116 1.904.123a.75.75 0 0 1-.013 1.5c-.85-.007-1.577-.033-2.18-.151c-.623-.122-1.166-.352-1.612-.798s-.675-.99-.798-1.613c-.118-.602-.144-1.328-.151-2.179a.75.75 0 0 1 .743-.756m4.754 8.743a.75.75 0 0 1-.743.756c-.856.008-1.454.036-1.904.124c-.429.084-.666.212-.84.386c-.175.175-.303.412-.387.84c-.088.45-.116 1.048-.123 1.904a.75.75 0 1 1-1.5-.013c.007-.85.033-1.576.151-2.179c.123-.623.352-1.166.798-1.612s.99-.676 1.613-.798c.602-.118 1.328-.144 2.179-.152a.75.75 0 0 1 .756.744"></svg:path>`,
})
export class SolarQuitFullScreenSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenSquareBrokenIcon],svg[solar-quit-full-screen-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarQuitFullScreenSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenSquareLineDuotoneIcon],svg[solar-quit-full-screen-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarQuitFullScreenSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenSquareLinearIcon],svg[solar-quit-full-screen-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarQuitFullScreenSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenSquareOutlineIcon],svg[solar-quit-full-screen-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m3.39 2.324a.75.75 0 0 1 .745.757c-.008.85-.034 1.576-.152 2.179c-.122.623-.352 1.166-.798 1.612s-.99.676-1.612.798c-.603.118-1.329.144-2.18.152a.75.75 0 1 1-.012-1.5c.856-.008 1.453-.036 1.903-.124c.429-.084.666-.212.84-.386c.175-.175.303-.412.387-.84c.088-.45.116-1.048.124-1.904a.75.75 0 0 1 .756-.744m3.99 0a.75.75 0 0 1 .757.744c.007.856.036 1.453.124 1.903c.084.429.212.666.386.84c.174.175.412.303.84.387c.45.088 1.048.116 1.904.124a.75.75 0 0 1-.013 1.5c-.85-.008-1.577-.034-2.179-.152c-.623-.122-1.167-.352-1.613-.798s-.675-.99-.797-1.612c-.118-.603-.145-1.329-.152-2.18a.75.75 0 0 1 .744-.756M5.25 13.994a.75.75 0 0 1 .757-.744c.85.007 1.576.034 2.179.152c.623.122 1.166.351 1.612.797s.676.99.798 1.613c.118.602.144 1.328.152 2.179a.75.75 0 0 1-1.5.013c-.008-.856-.036-1.454-.124-1.904c-.084-.428-.212-.666-.386-.84s-.412-.302-.84-.386c-.45-.088-1.048-.117-1.904-.124a.75.75 0 0 1-.744-.756m13.497 0a.75.75 0 0 1-.743.756c-.856.007-1.454.036-1.904.124c-.428.084-.666.212-.84.386s-.302.412-.386.84c-.088.45-.117 1.048-.124 1.904a.75.75 0 0 1-1.5-.013c.007-.85.034-1.577.152-2.179c.122-.623.351-1.167.797-1.613s.99-.675 1.613-.797c.602-.118 1.328-.145 2.179-.152a.75.75 0 0 1 .756.744" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitPipBoldIcon],svg[solar-quit-pip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3h4c3.771 0 5.657 0 6.828 1.172c.95.949 1.13 2.694 1.164 5.328c.012.937.018 1.405-.275 1.703c-.294.297-.768.297-1.717.297h-2.5c-2.828 0-4.243 0-5.121.879c-.879.878-.879 2.293-.879 5.121v2c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.699 21 10.466 21 10 21c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3m.97 9.03a.75.75 0 1 0 1.06-1.06L9.31 8.25h1.19a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V9.31z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.586 13.586C13 14.172 13 15.114 13 17s0 2.828.586 3.414S15.114 21 17 21h1c1.886 0 2.828 0 3.414-.586S22 18.886 22 17s0-2.828-.586-3.414S19.886 13 18 13h-1c-1.886 0-2.828 0-3.414.586"></svg:path>`,
})
export class SolarQuitPipBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitPipBoldDuotoneIcon],svg[solar-quit-pip-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.996 21h-4l-1.115-.001c-3.04-.012-4.663-.12-5.713-1.17a3 3 0 0 1-.19-.214c-.843-1.021-.96-2.558-.975-5.235A21 21 0 0 1 2 13.887V11c0-3.771 0-5.657 1.17-6.828C4.344 3 6.23 3 10.002 3h4c3.77 0 5.656 0 6.828 1.172q.1.1.19.213c.842 1.021.959 2.558.975 5.235q.003.273.002.493V13c0 3.771 0 5.657-1.171 6.828S17.767 21 13.996 21" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17m-2.03-4.97a.75.75 0 1 0 1.06-1.06L9.31 8.25h1.19a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V9.31z"></svg:path>`,
})
export class SolarQuitPipBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitPipBrokenIcon],svg[solar-quit-pip-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5v3m0-3h3m-3 0l4 4"></svg:path><svg:path stroke-linecap="round" d="M11 21h-1c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2m20 0c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2.518 4.825 2.229 5.7 2.102 7"></svg:path></svg:g>`,
})
export class SolarQuitPipBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitPipLineDuotoneIcon],svg[solar-quit-pip-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 17.5V11c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h8" opacity=".5"></svg:path><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5v3m0-3h3m-3 0l4 4"></svg:path></svg:g>`,
})
export class SolarQuitPipLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitPipLinearIcon],svg[solar-quit-pip-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 21h-1c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11"></svg:path><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5v3m0-3h3m-3 0l4 4"></svg:path></svg:g>`,
})
export class SolarQuitPipLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitPipOutlineIcon],svg[solar-quit-pip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 2.25h4.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V11a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 5.705 2.89 6.71c-.138 1.029-.14 2.383-.14 4.29v2c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153M6.75 7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H9.31l2.72 2.72a.75.75 0 1 1-1.06 1.06L8.25 9.31v1.19a.75.75 0 0 1-1.5 0zm10.198 4.75h1.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.343.08-2.242.08h-1.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.726-1.65c.455-.456 1.022-.642 1.65-.726c.594-.08 1.343-.08 2.242-.08m-2.043 1.566c-.461.063-.659.17-.789.3s-.237.328-.3.79c-.064.482-.066 1.13-.066 2.094s.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066h1c.964 0 1.612-.002 2.095-.067c.461-.062.659-.169.789-.3s.237-.327.3-.788c.064-.483.066-1.131.066-2.095s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-1c-.964 0-1.612.002-2.095.066" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitPipOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadar2BoldIcon],svg[solar-radar-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.358-15.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166l-2.137-1.73A2.85 2.85 0 1 0 12 9.151a.75.75 0 0 1-.001-1.5a4.35 4.35 0 1 1-3.802 2.236l-.709-.573a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadar2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadar2BoldDuotoneIcon],svg[solar-radar-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.126 6.823a5.249 5.249 0 1 1-3.636 2.49l.708.574A4.35 4.35 0 1 0 12 7.65a.75.75 0 0 0 0 1.5a2.85 2.85 0 1 1-2.609 1.703l2.137 1.73a.75.75 0 0 0 .944-1.166L8.274 8.019c-.561-.454-1.465-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953a.75.75 0 0 0 .25 1.478"></svg:path>`,
})
export class SolarRadar2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadar2BrokenIcon],svg[solar-radar-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.412 21.659q.796.212 1.588.292c4.795.488 9.372-2.558 10.66-7.363C23.088 9.253 19.922 3.77 14.587 2.34a9.97 9.97 0 0 0-7.501.95M12 12L5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898a10 10 0 0 0 2.661 9.734m2.367-10.96A6 6 0 1 0 17.811 10.5m-7.708-4.195A6 6 0 0 1 12 6c1.093 0 2.117.292 3 .802"></svg:path>`,
})
export class SolarRadar2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadar2LineDuotoneIcon],svg[solar-radar-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 12L5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898C.91 14.746 4.077 20.23 9.41 21.66c5.336 1.43 10.819-1.737 12.248-7.071C23.09 9.253 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"></svg:path><svg:path fill="currentColor" d="M9.866 5.595a.75.75 0 1 0 .474 1.423zM17.25 12c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 12zM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75zm0-10.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25zM6.75 12c0-1.269.45-2.43 1.198-3.338L6.79 7.707A6.73 6.73 0 0 0 5.25 12zm3.59-4.982A5.2 5.2 0 0 1 12 6.75v-1.5c-.745 0-1.462.12-2.134.345z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarRadar2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadar2LinearIcon],svg[solar-radar-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.66 14.588l-.725-.194zm-12.248 7.07l-.194.725zM2.34 9.412l-.725-.194zm12.247-7.07l-.194.724zm-3.06 10.241a.75.75 0 1 0 .944-1.165zM5.002 6.336l.472-.583zm-1.366.178l-.627-.41zm3.082-3.876a.75.75 0 1 0 .737 1.306zm3.148 2.957a.75.75 0 0 0 .474 1.423zm11.069 8.8a9.25 9.25 0 0 1-11.329 6.54l-.388 1.45c5.735 1.536 11.63-1.867 13.166-7.602zm-11.329 6.54a9.25 9.25 0 0 1-6.54-11.329l-1.45-.388C.08 14.952 3.483 20.847 9.218 22.383zm4.788-17.87a9.25 9.25 0 0 1 6.54 11.33l1.45.388c1.536-5.735-1.867-11.63-7.602-13.166zm-1.922 8.353L5.474 5.752L4.53 6.918l6.998 5.664zM3.065 9.605a9.2 9.2 0 0 1 1.198-2.68L3.01 6.102a10.7 10.7 0 0 0-1.393 3.115zm4.39-5.662a9.22 9.22 0 0 1 6.94-.878l.387-1.45c-2.83-.757-5.7-.312-8.064 1.022zm-1.981 1.81c-.733-.594-1.891-.526-2.465.35l1.254.822a.13.13 0 0 1 .099-.06a.23.23 0 0 1 .168.053zM17.25 12A5.25 5.25 0 0 1 12 17.25v1.5A6.75 6.75 0 0 0 18.75 12zM12 17.25A5.25 5.25 0 0 1 6.75 12h-1.5A6.75 6.75 0 0 0 12 18.75zm0-10.5c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25zM6.75 12c0-1.27.45-2.431 1.198-3.339L6.79 7.707A6.73 6.73 0 0 0 5.25 12zm3.59-4.983A5.2 5.2 0 0 1 12 6.75v-1.5c-.745 0-1.462.12-2.134.344z"></svg:path>`,
})
export class SolarRadar2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadar2OutlineIcon],svg[solar-radar-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.394 3.065a9.22 9.22 0 0 0-6.938.878a.75.75 0 1 1-.737-1.306a10.72 10.72 0 0 1 8.064-1.021c5.734 1.537 9.138 7.431 7.6 13.166c-1.536 5.735-7.43 9.138-13.165 7.601S.08 14.952 1.617 9.217a10.7 10.7 0 0 1 1.392-3.115c.574-.875 1.732-.943 2.465-.35l6.998 5.665a.75.75 0 0 1-.944 1.166l-4.04-3.27a5.25 5.25 0 1 0 2.851-2.296a.75.75 0 1 1-.473-1.423a6.75 6.75 0 1 1-3.553 2.768L4.53 6.918a.23.23 0 0 0-.168-.052a.13.13 0 0 0-.099.059a9.2 9.2 0 0 0-1.198 2.68a9.25 9.25 0 1 0 11.33-6.54" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadar2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadarBoldIcon],svg[solar-radar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadarBoldDuotoneIcon],svg[solar-radar-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.126 6.823a5.249 5.249 0 1 1-3.636 2.49l4.038 3.27a.75.75 0 0 0 .944-1.166L8.274 8.019c-.561-.454-1.465-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953a.75.75 0 0 0 .25 1.478"></svg:path>`,
})
export class SolarRadarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadarBrokenIcon],svg[solar-radar-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.412 21.659q.796.212 1.588.292c4.795.488 9.372-2.558 10.66-7.363C23.088 9.253 19.922 3.77 14.587 2.34a9.97 9.97 0 0 0-7.501.95M12 12L5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898a10 10 0 0 0 2.661 9.734"></svg:path>`,
})
export class SolarRadarBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadarLineDuotoneIcon],svg[solar-radar-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 12L5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898C.91 14.746 4.077 20.23 9.41 21.66c5.336 1.43 10.819-1.737 12.248-7.071C23.09 9.253 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"></svg:path>`,
})
export class SolarRadarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadarLinearIcon],svg[solar-radar-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 12L5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898C.91 14.746 4.077 20.23 9.41 21.66c5.336 1.43 10.819-1.737 12.248-7.071C23.09 9.253 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"></svg:path>`,
})
export class SolarRadarLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadarOutlineIcon],svg[solar-radar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.394 3.065a9.22 9.22 0 0 0-6.938.878a.75.75 0 1 1-.737-1.306a10.72 10.72 0 0 1 8.064-1.021c5.734 1.537 9.138 7.431 7.6 13.166c-1.536 5.735-7.43 9.138-13.165 7.601S.08 14.952 1.617 9.217a10.7 10.7 0 0 1 1.392-3.115c.574-.875 1.732-.943 2.465-.35l6.998 5.665a.75.75 0 0 1-.944 1.166L4.53 6.918a.23.23 0 0 0-.168-.052a.13.13 0 0 0-.099.059a9.2 9.2 0 0 0-1.198 2.68a9.25 9.25 0 1 0 11.33-6.54" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadialBlurBoldIcon],svg[solar-radial-blur-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 20.66C12.217 23.421 6.1 21.783 3.34 17C.577 12.217 2.216 6.1 7 3.34a9.96 9.96 0 0 1 6.195-1.27A9.99 9.99 0 0 1 20.66 7a9.99 9.99 0 0 1 .536 8.929A9.96 9.96 0 0 1 17 20.66M14.25 6.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 4.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 4.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M11 14.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M9.75 11a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M9.75 19a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0-12.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m8.5 2.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M6.5 9.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m11.75 3.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-11.75.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadialBlurBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadialBlurBoldDuotoneIcon],svg[solar-radial-blur-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M15.5 9.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-4.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M5.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m4.75-3.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m4.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m4 4a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m0 4.5a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m-3.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M9.75 15.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m-4-2a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m4.75 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class SolarRadialBlurBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadialBlurBrokenIcon],svg[solar-radial-blur-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm-4.5 4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"></svg:path><svg:path fill="currentColor" d="M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M18.25 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M5.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m12.5 4.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-12.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRadialBlurBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadialBlurLineDuotoneIcon],svg[solar-radial-blur-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.96 9.96 0 0 0 4.197-4.731a9.99 9.99 0 0 0-.537-8.93a9.99 9.99 0 0 0-7.464-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.58 12.217 3.34 17Z" opacity=".5"></svg:path><svg:path stroke="currentColor" d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm-4.5 4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"></svg:path><svg:path fill="currentColor" d="M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M18.25 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M5.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m12.5 4.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-12.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarRadialBlurLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadialBlurLinearIcon],svg[solar-radial-blur-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.96 9.96 0 0 0 4.197-4.731a9.99 9.99 0 0 0-.537-8.93a9.99 9.99 0 0 0-7.464-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.58 12.217 3.34 17Z"></svg:path><svg:path stroke="currentColor" d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm-4.5 4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm0-4.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"></svg:path><svg:path fill="currentColor" d="M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="currentColor" d="M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m0-12.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M18.25 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M5.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m12.5 4.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-12.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path></svg:g>`,
})
export class SolarRadialBlurLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadialBlurOutlineIcon],svg[solar-radial-blur-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.106 2.815a9.2 9.2 0 0 0-5.73 1.174a9.25 9.25 0 1 0 9.25 16.021a9.2 9.2 0 0 0 3.88-4.376a9.24 9.24 0 0 0-.495-8.26a9.24 9.24 0 0 0-6.905-4.559m-6.48-.125a10.7 10.7 0 0 1 6.66-1.364a10.74 10.74 0 0 1 8.024 5.299a10.74 10.74 0 0 1 .577 9.598a10.7 10.7 0 0 1-4.512 5.087c-5.141 2.968-11.716 1.206-14.684-3.935C-.278 12.233 1.484 5.658 6.625 2.69" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 9a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M8 9.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M14.25 9a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-1.75.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M9.75 13.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M8 14.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m6.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-1.75.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M18.25 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M5.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m12.5 4.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-12.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class SolarRadialBlurOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioBoldIcon],svg[solar-radio-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 12.25v-.75a.75.75 0 0 0-1.5 0v.75H7a1.25 1.25 0 1 1 0-2.5h10a1.25 1.25 0 1 1 0 2.5zm-9 4.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.32 3.679a.75.75 0 1 0-.64-1.357L6.768 6.046c-1.736.089-2.821.351-3.595 1.126C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828S17.771 6 14 6h-3.613zM7 8.25a2.75 2.75 0 0 0 0 5.5h10a2.75 2.75 0 1 0 0-5.5zM5.25 17a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m7 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadioBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioBoldDuotoneIcon],svg[solar-radio-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 17a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 9a2 2 0 1 0 0 4h7.25v-1.5a.75.75 0 0 1 1.5 0V13H17a2 2 0 1 0 0-4z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.364 2.656a.75.75 0 1 0-.728-1.311L6.088 6.093c.876-.08 1.941-.091 3.256-.093z"></svg:path>`,
})
export class SolarRadioBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioBrokenIcon],svg[solar-radio-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 9h5a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4h1"></svg:path><svg:path d="M9 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M15 11.5V13m-2 4h5M6.5 6L15 2m7 12c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path></svg:g>`,
})
export class SolarRadioBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioLineDuotoneIcon],svg[solar-radio-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:path d="M5 11a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M9 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 11.5V13m-2 4h5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6.5 6L15 2"></svg:path></svg:g>`,
})
export class SolarRadioLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioLinearIcon],svg[solar-radio-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:path d="M5 11a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Zm4 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" d="M15 11.5V13m-2 4h5M6.5 6L15 2"></svg:path></svg:g>`,
})
export class SolarRadioLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticBoldIcon],svg[solar-radio-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 14a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.32 3.679a.75.75 0 1 0-.64-1.357L6.768 6.046c-1.736.089-2.821.351-3.595 1.126C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828S17.771 6 14 6h-3.613zM8 10.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m4.75.75a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 0-1.5zM12.75 17a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadioMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticBoldDuotoneIcon],svg[solar-radio-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 14a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m8.5-3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.38 2.647a.75.75 0 1 0-.76-1.293l-7.99 4.7C7.474 6.003 8.477 6 9.679 6z"></svg:path>`,
})
export class SolarRadioMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticBrokenIcon],svg[solar-radio-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:circle cx="8" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" d="M13.5 11H19m-5.5 3h.5m5 0h-2.5m-.5 3h-2.5m5.5 0h-.5M6.5 6L15 2"></svg:path></svg:g>`,
})
export class SolarRadioMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticLineDuotoneIcon],svg[solar-radio-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:circle cx="8" cy="14" r="3" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M13.5 11H19"></svg:path><svg:path stroke-linecap="round" d="M13.5 14H19" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M13.5 17H19M6.5 6L15 2"></svg:path></svg:g>`,
})
export class SolarRadioMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticLinearIcon],svg[solar-radio-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:circle cx="8" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" d="M13.5 11H19m-5.5 3H19m-5.5 3H19M6.5 6L15 2"></svg:path></svg:g>`,
})
export class SolarRadioMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticOutlineIcon],svg[solar-radio-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.679 1.68a.75.75 0 0 1-.36.999L9.855 5.25h4.201c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.113c0 1.837 0 3.293-.153 4.432c-.158 1.173-.49 2.122-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.748-1.08-1.697-1.238-2.87c-.153-1.139-.153-2.595-.153-4.432v-.113c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.306-.04.643-.068l.027-.013l8.5-4a.75.75 0 0 1 .998.359M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.29c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.001 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.289c-.135-1.006-.389-1.586-.812-2.009s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M8 11.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M4.25 14a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m8.5-3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadioMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioOutlineIcon],svg[solar-radio-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.679 1.68a.75.75 0 0 1-.36.999L9.855 5.25h4.201c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.113c0 1.837 0 3.293-.153 4.432c-.158 1.173-.49 2.122-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.748-1.08-1.697-1.238-2.87c-.153-1.139-.153-2.595-.153-4.432v-.113c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238q.306-.04.643-.068l.027-.013l8.5-4a.75.75 0 0 1 .998.359M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.29c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.001 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289s-.002-3.261-.14-4.289c-.135-1.006-.389-1.586-.812-2.009s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14M4.25 11A2.75 2.75 0 0 1 7 8.25h10a2.75 2.75 0 1 1 0 5.5H7A2.75 2.75 0 0 1 4.25 11m11.5 1.25v-.75a.75.75 0 0 0-1.5 0v.75H7a1.25 1.25 0 0 1 0-2.5h10a1.25 1.25 0 1 1 0 2.5zm-8.25 4a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M5.25 17a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m7 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadioOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRankingBoldIcon],svg[solar-ranking-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10h2c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v6c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16s2.121 0 2.56.44c.44.439.44 1.146.44 2.56v3H2c0-1.414 0-2.121.44-2.56C2.878 19 3.585 19 5 19s2.121 0 2.56.44C8 19.878 8 20.585 8 22v-9c0-1.414 0-2.121.44-2.56C8.878 10 9.585 10 11 10m.146-6.977C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path>`,
})
export class SolarRankingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRankingBoldDuotoneIcon],svg[solar-ranking-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.146 3.023C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354zM13 10h-2c-1.414 0-2.121 0-2.56.44C8 10.878 8 11.585 8 13v9h8v-9c0-1.414 0-2.121-.44-2.56C15.122 10 14.415 10 13 10"></svg:path><svg:path fill="currentColor" d="M7.56 19.44C7.122 19 6.415 19 5 19s-2.121 0-2.56.44C2 19.878 2 20.585 2 22h6c0-1.414 0-2.121-.44-2.56M16 19v3h6v-3c0-1.414 0-2.121-.44-2.56C21.122 16 20.415 16 19 16s-2.121 0-2.56.44C16 16.878 16 17.585 16 19" opacity=".5"></svg:path>`,
})
export class SolarRankingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRankingBrokenIcon],svg[solar-ranking-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16 22v-9c0-1.414 0-2.121-.44-2.56C15.122 10 14.415 10 13 10h-2c-1.414 0-2.121 0-2.56.44C8 10.878 8 11.585 8 13m0 9v-5m0 5c0-1.414 0-2.121-.44-2.56C7.122 19 6.415 19 5 19s-2.121 0-2.56.44C2 19.878 2 20.585 2 22m20 0v-3c0-1.414 0-2.121-.44-2.56C21.122 16 20.415 16 19 16s-2.121 0-2.56.44C16 16.878 16 17.585 16 19v3"></svg:path><svg:path d="M11.146 3.023C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path></svg:g>`,
})
export class SolarRankingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRankingLineDuotoneIcon],svg[solar-ranking-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16 22v-9c0-1.414 0-2.121-.44-2.56C15.122 10 14.415 10 13 10h-2c-1.414 0-2.121 0-2.56.44C8 10.878 8 11.585 8 13v9"></svg:path><svg:path stroke-linecap="round" d="M8 22c0-1.414 0-2.121-.44-2.56C7.122 19 6.415 19 5 19s-2.121 0-2.56.44C2 19.878 2 20.585 2 22m20 0v-3c0-1.414 0-2.121-.44-2.56C21.122 16 20.415 16 19 16s-2.121 0-2.56.44C16 16.878 16 17.585 16 19v3" opacity=".5"></svg:path><svg:path d="M11.146 3.023C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path></svg:g>`,
})
export class SolarRankingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRankingLinearIcon],svg[solar-ranking-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M16 22v-9c0-1.414 0-2.121-.44-2.56C15.122 10 14.415 10 13 10h-2c-1.414 0-2.121 0-2.56.44C8 10.878 8 11.585 8 13v9m0 0c0-1.414 0-2.121-.44-2.56C7.122 19 6.415 19 5 19s-2.121 0-2.56.44C2 19.878 2 20.585 2 22m20 0v-3c0-1.414 0-2.121-.44-2.56C21.122 16 20.415 16 19 16s-2.121 0-2.56.44C16 16.878 16 17.585 16 19v3"></svg:path><svg:path d="M11.146 3.023C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path></svg:g>`,
})
export class SolarRankingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRankingOutlineIcon],svg[solar-ranking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.034q-.086.15-.199.354l-.098.176l-.023.04c-.078.144-.208.382-.425.547c-.221.168-.488.226-.643.26l-.044.009l-.19.043c-.176.04-.319.072-.44.103c.079.097.182.219.316.376l.13.152l.03.034c.108.125.282.325.363.585c.08.256.052.52.035.686l-.005.047l-.02.203l-.042.46c.105-.046.223-.1.364-.165l.179-.082l.04-.02c.144-.067.393-.185.672-.185s.528.118.672.186l.04.019l.179.082q.209.098.364.165l-.042-.46l-.02-.203l-.005-.047c-.017-.167-.045-.43.035-.686c.08-.26.255-.46.363-.585l.03-.034l.13-.152c.134-.157.237-.279.316-.376c-.121-.03-.264-.063-.44-.103l-.19-.043l-.044-.01c-.155-.033-.422-.091-.643-.26c-.217-.164-.347-.402-.425-.545l-.023-.041l-.098-.176q-.112-.204-.199-.354M11.014 1.8c.172-.225.484-.55.986-.55s.814.325.986.55c.165.214.33.511.5.816l.023.041l.098.177l.057.1l.099.023l.19.043l.048.01c.327.075.653.148.903.247c.276.109.65.32.795.785c.142.455-.037.841-.193 1.09c-.145.23-.365.486-.59.749l-.03.035l-.13.153l-.082.097c.002.036.007.078.012.135l.02.203l.004.046c.034.352.067.692.055.964c-.012.286-.08.718-.468 1.011c-.4.304-.84.238-1.12.157c-.258-.073-.563-.214-.87-.355l-.043-.02l-.18-.083L12 8.185l-.085.04l-.179.082l-.044.02c-.306.141-.61.282-.869.355c-.28.08-.72.147-1.12-.157c-.387-.293-.456-.725-.468-1.01c-.012-.273.02-.613.055-.965l.004-.046l.02-.203l.013-.135l-.083-.097l-.13-.153l-.03-.035c-.225-.263-.445-.52-.59-.75c-.156-.248-.335-.634-.193-1.09c.144-.463.519-.675.795-.784c.25-.099.576-.172.903-.246l.047-.01l.191-.044l.1-.023l.056-.1l.098-.177l.023-.041c.17-.305.335-.602.5-.816m-.063 7.45h2.098c.665 0 1.238 0 1.697.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697v2.466c.164-.05.333-.082.504-.105c.459-.062 1.032-.062 1.697-.062h.098c.665 0 1.238 0 1.697.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697V22a.75.75 0 0 1-1.5 0v-3c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v3a.75.75 0 0 1-1.5 0v-9c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048h-2c-.728 0-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v9a.75.75 0 0 1-1.5 0c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546a.75.75 0 0 1-1.5 0v-.05c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h.098c.665 0 1.238 0 1.697.062q.257.033.504.105v-5.466c0-.665 0-1.238.062-1.697c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062" clip-rule="evenodd"></svg:path>`,
})
export class SolarRankingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveSquareBoldIcon],svg[solar-recive-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.25 0c0 .414.336.75.75.75h5.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H7a.75.75 0 0 0-.75.75m11.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarReciveSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveSquareBoldDuotoneIcon],svg[solar-recive-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.25 8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0zM7 12.75a.75.75 0 0 1 0-1.5h5.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72z"></svg:path>`,
})
export class SolarReciveSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveSquareBrokenIcon],svg[solar-recive-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M7 12h7m0 0l-3 3m3-3l-3-3"></svg:path><svg:path d="M17 16V8m5 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarReciveSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveSquareLineDuotoneIcon],svg[solar-recive-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 12h7m0 0l-3 3m3-3l-3-3"></svg:path><svg:path stroke-linecap="round" d="M17 16V8"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarReciveSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveSquareLinearIcon],svg[solar-recive-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 12h7m0 0l-3 3m3-3l-3-3"></svg:path><svg:path stroke-linecap="round" d="M17 16V8"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarReciveSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveSquareOutlineIcon],svg[solar-recive-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7.25a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-.75-.75M6.25 12c0 .414.336.75.75.75h5.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H7a.75.75 0 0 0-.75.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarReciveSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveTwiceSquareBoldIcon],svg[solar-recive-twice-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7 14.75a.75.75 0 0 0 0 1.5h4.929l-1.41 1.174a.75.75 0 0 0 .961 1.152l3-2.5a.75.75 0 0 0 0-1.152l-3-2.5a.75.75 0 0 0-.96 1.152l1.409 1.174zM6.25 8.5A.75.75 0 0 1 7 7.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 0 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75M17.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarReciveTwiceSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveTwiceSquareBoldDuotoneIcon],svg[solar-recive-twice-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.25 8.5A.75.75 0 0 1 7 7.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75m0 7a.75.75 0 0 1 .75-.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75m10 2.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarReciveTwiceSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveTwiceSquareBrokenIcon],svg[solar-recive-twice-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11"></svg:path><svg:path d="M17 6v12m5-6c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarReciveTwiceSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveTwiceSquareLineDuotoneIcon],svg[solar-recive-twice-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11"></svg:path><svg:path stroke-linecap="round" d="M17 6v12"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarReciveTwiceSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveTwiceSquareLinearIcon],svg[solar-recive-twice-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11"></svg:path><svg:path stroke-linecap="round" d="M17 6v12"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarReciveTwiceSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveTwiceSquareOutlineIcon],svg[solar-recive-twice-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 8.5A.75.75 0 0 1 7 7.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 0 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75m0 7a.75.75 0 0 1 .75-.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 0 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75m10 2.5a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53c-.194 1.444-.6 2.584-1.494 3.479c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.895-.895-1.3-2.035-1.494-3.48c-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62c.57.569 1.34.896 2.619 1.068c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.569-.57.896-1.34 1.068-2.619c.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" clip-rule="evenodd"></svg:path>`,
})
export class SolarReciveTwiceSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordBoldIcon],svg[solar-record-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor"></svg:circle>`,
})
export class SolarRecordBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordBoldDuotoneIcon],svg[solar-record-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="7" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-3a7 7 0 1 0 0-14a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordBrokenIcon],svg[solar-record-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path>`,
})
export class SolarRecordBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleBoldIcon],svg[solar-record-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 12a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.26-8.25a3.25 3.25 0 1 1 2.74 1.5H8a3.25 3.25 0 1 1 2.74-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleBoldDuotoneIcon],svg[solar-record-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 12c0 .644.188 1.245.51 1.75h-2.52A3.25 3.25 0 1 0 8 15.25h8A3.25 3.25 0 1 0 12.75 12m1.5 0a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-4.5 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleBrokenIcon],svg[solar-record-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path><svg:path d="M16 12a4 4 0 1 1-2-3.465"></svg:path></svg:g>`,
})
export class SolarRecordCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleLineDuotoneIcon],svg[solar-record-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" opacity=".5"></svg:path><svg:path d="M10.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 14.5h8"></svg:path></svg:g>`,
})
export class SolarRecordCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleLinearIcon],svg[solar-record-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path d="M10.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 14.5h8"></svg:path></svg:g>`,
})
export class SolarRecordCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleOutlineIcon],svg[solar-record-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.26 13.75a3.25 3.25 0 1 1 2.74 1.5H8a3.25 3.25 0 1 1 2.74-1.5zm.99-1.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path><svg:path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0"></svg:path></svg:g>`,
})
export class SolarRecordCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordLineDuotoneIcon],svg[solar-record-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"></svg:circle>`,
})
export class SolarRecordLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordLinearIcon],svg[solar-record-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"></svg:circle>`,
})
export class SolarRecordLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticBoldIcon],svg[solar-record-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.889 16C3.74 16 2 14.21 2 12s1.741-4 3.889-4s3.889 1.79 3.889 4a4.06 4.06 0 0 1-.697 2.286h5.838A4.06 4.06 0 0 1 14.222 12c0-2.21 1.741-4 3.89-4C20.258 8 22 9.79 22 12s-1.741 4-3.889 4z"></svg:path>`,
})
export class SolarRecordMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticBoldDuotoneIcon],svg[solar-record-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-12 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill="currentColor" d="M6 16h12a4 4 0 0 1-2.646-1H8.646c-.705.622-1.632 1-2.646 1" opacity=".5"></svg:path>`,
})
export class SolarRecordMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticBrokenIcon],svg[solar-record-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M21 11.5A3.5 3.5 0 1 1 17.5 8"></svg:path><svg:path d="M10 11.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M6.5 15h11"></svg:path></svg:g>`,
})
export class SolarRecordMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticLineDuotoneIcon],svg[solar-record-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 11.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Zm-11 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M6.5 15h11" opacity=".5"></svg:path></svg:g>`,
})
export class SolarRecordMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticLinearIcon],svg[solar-record-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-12 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path stroke-linecap="round" d="M6 16h12"></svg:path></svg:g>`,
})
export class SolarRecordMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticOutlineIcon],svg[solar-record-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.464 15.25A4.75 4.75 0 1 0 6 16.75h12a4.75 4.75 0 1 0-3.464-1.5zM6 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m12 6.5a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordOutlineIcon],svg[solar-record-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordSquareBoldIcon],svg[solar-record-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 12a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m9.797 10.286a3.25 3.25 0 1 1 2.74 1.5H7.999a3.25 3.25 0 1 1 2.74-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordSquareBoldDuotoneIcon],svg[solar-record-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 12c0 .644.188 1.245.51 1.75h-2.52A3.25 3.25 0 1 0 8 15.25h8A3.25 3.25 0 1 0 12.75 12m1.5 0a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-4.5 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordSquareBrokenIcon],svg[solar-record-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-8 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 14.5h8m6-2.5c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarRecordSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordSquareLineDuotoneIcon],svg[solar-record-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-8 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 14.5h8"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarRecordSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordSquareLinearIcon],svg[solar-record-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-8 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 14.5h8"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarRecordSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordSquareOutlineIcon],svg[solar-record-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.25 12c0 .644-.187 1.245-.51 1.75h2.52a3.25 3.25 0 1 1 2.74 1.5H8A3.25 3.25 0 1 1 11.25 12m-5 0a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m11.5 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path><svg:path d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62"></svg:path></svg:g>`,
})
export class SolarRecordSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReel2BoldIcon],svg[solar-reel-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4.73 8.5h3.98a.75.75 0 0 1 0 1.5zm1-16.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0M6.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 17.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2M8.25 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarReel2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReel2BoldDuotoneIcon],svg[solar-reel-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 15.75a3.75 3.75 0 1 1 0-7.5a3.75 3.75 0 0 1 0 7.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.5 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2M12 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m1 14a1 1 0 1 0-2 0a1 1 0 0 0 2 0m5.5-5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarReel2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReel2BrokenIcon],svg[solar-reel-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22h10"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"></svg:path><svg:path fill="currentColor" d="M19.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarReel2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReel2LineDuotoneIcon],svg[solar-reel-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22h10" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class SolarReel2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReel2LinearIcon],svg[solar-reel-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 22h10"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"></svg:path><svg:path fill="currentColor" d="M19.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g>`,
})
export class SolarReel2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReel2OutlineIcon],svg[solar-reel-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5m5.48 18.5A10.75 10.75 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12S6.063 22.75 12 22.75h10a.75.75 0 0 0 0-1.5zM12 9.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class SolarReel2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReelBoldIcon],svg[solar-reel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12m10-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-4.5-7.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M18 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarReelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReelBoldDuotoneIcon],svg[solar-reel-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.5 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M9 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m4.5-4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class SolarReelBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReelBrokenIcon],svg[solar-reel-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 22h10"></svg:path><svg:path d="M13.5 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-6-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarReelBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReelLineDuotoneIcon],svg[solar-reel-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M12 22h10" opacity=".5"></svg:path><svg:path d="M13.5 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-6-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarReelLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReelLinearIcon],svg[solar-reel-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="M12 22h10"></svg:path><svg:path d="M13.5 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-6-6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"></svg:path></svg:g>`,
})
export class SolarReelLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReelOutlineIcon],svg[solar-reel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5m5.48 18.5A10.75 10.75 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12S6.063 22.75 12 22.75h10a.75.75 0 0 0 0-1.5zM12 6.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M7.5 11.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M5.25 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m11.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M12 15.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarReelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshBoldIcon],svg[solar-refresh-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.079 2.25c-4.794 0-8.734 3.663-9.118 8.333H2a.75.75 0 0 0-.528 1.283l1.68 1.666a.75.75 0 0 0 1.056 0l1.68-1.666a.75.75 0 0 0-.528-1.283h-.893c.38-3.831 3.638-6.833 7.612-6.833a7.66 7.66 0 0 1 6.537 3.643a.75.75 0 1 0 1.277-.786A9.16 9.16 0 0 0 12.08 2.25m8.761 8.217a.75.75 0 0 0-1.054 0L18.1 12.133a.75.75 0 0 0 .527 1.284h.899c-.382 3.83-3.651 6.833-7.644 6.833a7.7 7.7 0 0 1-6.565-3.644a.75.75 0 1 0-1.277.788a9.2 9.2 0 0 0 7.842 4.356c4.808 0 8.765-3.66 9.15-8.333H22a.75.75 0 0 0 .527-1.284z"></svg:path>`,
})
export class SolarRefreshBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshBoldDuotoneIcon],svg[solar-refresh-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.079 2.25c-4.794 0-8.734 3.663-9.118 8.333H2a.75.75 0 0 0-.528 1.283l1.68 1.666a.75.75 0 0 0 1.056 0l1.68-1.666a.75.75 0 0 0-.528-1.283h-.893c.38-3.831 3.638-6.833 7.612-6.833a7.66 7.66 0 0 1 6.537 3.643a.75.75 0 1 0 1.277-.786A9.16 9.16 0 0 0 12.08 2.25"></svg:path><svg:path fill="currentColor" d="M20.841 10.467a.75.75 0 0 0-1.054 0L18.1 12.133a.75.75 0 0 0 .527 1.284h.899c-.381 3.83-3.651 6.833-7.644 6.833a7.7 7.7 0 0 1-6.565-3.644a.75.75 0 1 0-1.276.788a9.2 9.2 0 0 0 7.84 4.356c4.809 0 8.766-3.66 9.151-8.333H22a.75.75 0 0 0 .527-1.284z" opacity=".5"></svg:path>`,
})
export class SolarRefreshBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshBrokenIcon],svg[solar-refresh-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.68 11.333h-.75zm0 1.667l-.528.532a.75.75 0 0 0 1.056 0zm2.208-1.134A.75.75 0 1 0 4.83 10.8zM2.528 10.8a.75.75 0 0 0-1.056 1.065zm16.088-3.408a.75.75 0 1 0 1.277-.786zm-1.723-3.785a.75.75 0 1 0-.786 1.277zm-4.43.151a.75.75 0 0 0 .074-1.498zM12.08 2.25c-5.047 0-9.15 4.061-9.15 9.083h1.5c0-4.182 3.42-7.583 7.65-7.583zm-9.15 9.083V13h1.5v-1.667zm1.28 2.2l1.679-1.667L4.83 10.8l-1.68 1.667zm0-1.065L2.528 10.8l-1.057 1.065l1.68 1.666zm15.684-5.86a9.16 9.16 0 0 0-3-3l-.786 1.277a7.66 7.66 0 0 1 2.509 2.508zM12.537 2.26a9 9 0 0 0-.458-.011v1.5q.193 0 .384.01zM11.883 21v.75zm8.43-8.333h.75zm0-1.667l.528-.533a.75.75 0 0 0-1.055 0zM18.1 12.133a.75.75 0 1 0 1.055 1.067zm3.373 1.067a.75.75 0 1 0 1.054-1.067zM5.318 16.606a.75.75 0 1 0-1.277.788zm6.215 3.636a.75.75 0 0 0-.066 1.499zm-4.42.188a.75.75 0 0 0 .774-1.285zm4.77 1.32c5.062 0 9.18-4.058 9.18-9.083h-1.5c0 4.18-3.43 7.583-7.68 7.583zm9.18-9.083V11h-1.5v1.667zm-1.277-2.2L18.1 12.133l1.055 1.067l1.686-1.667zm0 1.066l1.687 1.667l1.054-1.067l-1.686-1.666zm-8.32 10.208q.208.009.417.009v-1.5q-.176 0-.35-.008zm-7.425-4.347a9.2 9.2 0 0 0 3.072 3.036l.774-1.285a7.7 7.7 0 0 1-2.57-2.539z"></svg:path>`,
})
export class SolarRefreshBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshCircleBoldIcon],svg[solar-refresh-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-16.54-.917a6.59 6.59 0 0 1 6.55-5.833a6.59 6.59 0 0 1 5.242 2.592a.75.75 0 0 1-1.192.911a5.09 5.09 0 0 0-4.05-2.003a5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28zm12.902-.614a.75.75 0 0 0-1.06 0l-1.168 1.167a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-4.038-1.986a.75.75 0 0 0-1.188.916a6.58 6.58 0 0 0 5.226 2.57a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRefreshCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshCircleBoldDuotoneIcon],svg[solar-refresh-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path>`,
})
export class SolarRefreshCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshCircleBrokenIcon],svg[solar-refresh-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRefreshCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshCircleLineDuotoneIcon],svg[solar-refresh-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarRefreshCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshCircleLinearIcon],svg[solar-refresh-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarRefreshCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshCircleOutlineIcon],svg[solar-refresh-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.713 10.674c.454-2.52 2.672-4.424 5.33-4.424c1.578 0 3 .67 3.99 1.74a.75.75 0 1 1-1.101 1.02a3.92 3.92 0 0 0-2.888-1.26a3.91 3.91 0 0 0-3.8 2.935l.237-.226a.75.75 0 0 1 1.038 1.082l-1.622 1.556a.75.75 0 0 1-1.08-.044l-1.378-1.556a.75.75 0 1 1 1.122-.994zm9.936.022a.75.75 0 0 1 .53.251l1.382 1.555a.75.75 0 1 1-1.122.996l-.155-.175c-.454 2.523-2.683 4.428-5.35 4.428a5.45 5.45 0 0 1-3.98-1.719a.75.75 0 1 1 1.093-1.026a3.95 3.95 0 0 0 2.888 1.245a3.925 3.925 0 0 0 3.815-2.932l-.23.222a.75.75 0 1 1-1.04-1.082l1.62-1.555a.75.75 0 0 1 .548-.208"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRefreshCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshLineDuotoneIcon],svg[solar-refresh-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.079 3v-.75zm-8.4 8.333h-.75zm0 1.667l-.527.532a.75.75 0 0 0 1.056 0zm2.209-1.134A.75.75 0 1 0 4.83 10.8zM2.528 10.8a.75.75 0 0 0-1.056 1.065zm16.088-3.408a.75.75 0 1 0 1.277-.786zM12.079 2.25c-5.047 0-9.15 4.061-9.15 9.083h1.5c0-4.182 3.42-7.583 7.65-7.583zm-9.15 9.083V13h1.5v-1.667zm1.28 2.2l1.679-1.667L4.83 10.8l-1.68 1.667zm0-1.065L2.528 10.8l-1.057 1.065l1.68 1.666zm15.684-5.86A9.16 9.16 0 0 0 12.08 2.25v1.5a7.66 7.66 0 0 1 6.537 3.643z"></svg:path><svg:path fill="currentColor" d="M11.883 21v.75zm8.43-8.333h.75zm0-1.667l.528-.533a.75.75 0 0 0-1.055 0zM18.1 12.133a.75.75 0 1 0 1.055 1.067zm3.373 1.067a.75.75 0 1 0 1.054-1.067zM5.318 16.606a.75.75 0 1 0-1.277.788zm6.565 5.144c5.062 0 9.18-4.058 9.18-9.083h-1.5c0 4.18-3.43 7.583-7.68 7.583zm9.18-9.083V11h-1.5v1.667zm-1.277-2.2L18.1 12.133l1.055 1.067l1.686-1.667zm0 1.066l1.687 1.667l1.054-1.067l-1.686-1.666zm-15.745 5.86a9.2 9.2 0 0 0 7.842 4.357v-1.5a7.7 7.7 0 0 1-6.565-3.644z" opacity=".5"></svg:path>`,
})
export class SolarRefreshLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshLinearIcon],svg[solar-refresh-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.68 11.333h-.75zm0 1.667l-.528.532a.75.75 0 0 0 1.056 0zm2.208-1.134A.75.75 0 1 0 4.83 10.8zM2.528 10.8a.75.75 0 0 0-1.056 1.065zm16.088-3.408a.75.75 0 1 0 1.277-.786zM12.079 2.25c-5.047 0-9.15 4.061-9.15 9.083h1.5c0-4.182 3.42-7.583 7.65-7.583zm-9.15 9.083V13h1.5v-1.667zm1.28 2.2l1.679-1.667L4.83 10.8l-1.68 1.667zm0-1.065L2.528 10.8l-1.057 1.065l1.68 1.666zm15.684-5.86A9.16 9.16 0 0 0 12.08 2.25v1.5a7.66 7.66 0 0 1 6.537 3.643zM20.314 11l.527-.533a.75.75 0 0 0-1.054 0zM18.1 12.133a.75.75 0 0 0 1.055 1.067zm3.373 1.067a.75.75 0 1 0 1.054-1.067zM5.318 16.606a.75.75 0 1 0-1.277.788zm6.565 5.144c5.062 0 9.18-4.058 9.18-9.083h-1.5c0 4.18-3.43 7.583-7.68 7.583zm9.18-9.083V11h-1.5v1.667zm-1.276-2.2L18.1 12.133l1.055 1.067l1.686-1.667zm0 1.066l1.686 1.667l1.054-1.067l-1.686-1.666zM4.04 17.393a9.2 9.2 0 0 0 7.842 4.357v-1.5a7.7 7.7 0 0 1-6.565-3.644z"></svg:path>`,
})
export class SolarRefreshLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshOutlineIcon],svg[solar-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.93 11.2c.072-4.96 4.146-8.95 9.149-8.95a9.16 9.16 0 0 1 7.814 4.357a.75.75 0 0 1-1.277.786a7.66 7.66 0 0 0-6.537-3.643c-4.185 0-7.575 3.328-7.648 7.448l.4-.397a.75.75 0 0 1 1.057 1.065l-1.68 1.666a.75.75 0 0 1-1.056 0l-1.68-1.666A.75.75 0 1 1 2.528 10.8zm16.856-.733a.75.75 0 0 1 1.055 0l1.686 1.666a.75.75 0 1 1-1.054 1.067l-.41-.405c-.07 4.965-4.161 8.955-9.18 8.955a9.2 9.2 0 0 1-7.842-4.356a.75.75 0 1 1 1.277-.788a7.7 7.7 0 0 0 6.565 3.644c4.206 0 7.61-3.333 7.68-7.453l-.408.403a.75.75 0 1 1-1.055-1.067z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshSquareBoldIcon],svg[solar-refresh-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m1.997 7.62A6.59 6.59 0 0 1 12.01 5.25c1.982 0 3.76.875 4.967 2.257a.75.75 0 0 1-1.13.986A5.08 5.08 0 0 0 12.01 6.75a5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28zm11.84-.615a.75.75 0 0 1 1.06 0l1.169 1.167a.75.75 0 0 1-.53 1.28h-.46a6.59 6.59 0 0 1-6.55 5.834a6.58 6.58 0 0 1-4.967-2.256a.75.75 0 0 1 1.13-.987a5.08 5.08 0 0 0 3.838 1.743a5.09 5.09 0 0 0 5.036-4.333h-.363a.75.75 0 0 1-.53-1.281z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRefreshSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshSquareBoldDuotoneIcon],svg[solar-refresh-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.01 5.25a6.59 6.59 0 0 0-6.55 5.833H5a.75.75 0 0 0-.53 1.281l1.168 1.167a.75.75 0 0 0 1.06 0l1.169-1.167a.75.75 0 0 0-.53-1.28h-.364A5.09 5.09 0 0 1 12.01 6.75a5.08 5.08 0 0 1 3.838 1.743a.75.75 0 1 0 1.13-.986A6.58 6.58 0 0 0 12.01 5.25m6.352 5.22a.75.75 0 0 0-1.06 0l-1.168 1.166a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-3.839-1.743a.75.75 0 0 0-1.13.987a6.58 6.58 0 0 0 4.969 2.256a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z"></svg:path>`,
})
export class SolarRefreshSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshSquareBrokenIcon],svg[solar-refresh-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarRefreshSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshSquareLineDuotoneIcon],svg[solar-refresh-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarRefreshSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshSquareLinearIcon],svg[solar-refresh-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7.378 11.63h-.75zm0 .926l-.562.497a.75.75 0 0 0 1.08.044zm2.141-1.015a.75.75 0 0 0-1.038-1.082zm-2.958-1.038a.75.75 0 1 0-1.122.994zm8.37-1.494a.75.75 0 1 0 1.102-1.018zM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88zm-5.416 5.38v.926h1.5v-.926zm1.269 1.467l1.622-1.556l-1.038-1.082l-1.622 1.555zm.042-1.039l-1.378-1.555l-1.122.994l1.377 1.556zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26zm.585 3.453l.56-.498a.75.75 0 0 0-1.08-.043zm-2.139 1.014a.75.75 0 1 0 1.04 1.082zm2.96 1.04a.75.75 0 0 0 1.12-.997zm-8.393 1.507a.75.75 0 0 0-1.094 1.026zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88zm5.434-5.38v-.926h-1.5v.926zm-1.27-1.467l-1.619 1.555l1.04 1.082l1.618-1.555zm-.04 1.04l1.38 1.554l1.122-.996l-1.381-1.555zM7.952 16.03a5.45 5.45 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path></svg:g>`,
})
export class SolarRefreshSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshSquareOutlineIcon],svg[solar-refresh-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.713 10.674c.454-2.52 2.672-4.424 5.33-4.424c1.578 0 3 .67 3.99 1.74a.75.75 0 1 1-1.101 1.02a3.92 3.92 0 0 0-2.888-1.26a3.91 3.91 0 0 0-3.8 2.935l.237-.226a.75.75 0 0 1 1.038 1.082l-1.622 1.556a.75.75 0 0 1-1.08-.044l-1.378-1.556a.75.75 0 1 1 1.122-.994zm9.936.022a.75.75 0 0 1 .53.251l1.382 1.555a.75.75 0 1 1-1.122.996l-.155-.175c-.454 2.523-2.683 4.428-5.35 4.428a5.45 5.45 0 0 1-3.98-1.719a.75.75 0 1 1 1.093-1.026a3.95 3.95 0 0 0 2.888 1.245a3.925 3.925 0 0 0 3.815-2.932l-.23.222a.75.75 0 1 1-1.04-1.082l1.62-1.555a.75.75 0 0 1 .548-.208"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarRefreshSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2BoldIcon],svg[solar-remote-controller-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 15.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104M12 11.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M10 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteController2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2BoldDuotoneIcon],svg[solar-remote-controller-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M10 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 15.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteController2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2BrokenIcon],svg[solar-remote-controller-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="14" cy="6" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteController2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2LineDuotoneIcon],svg[solar-remote-controller-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="14" cy="6" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteController2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2LinearIcon],svg[solar-remote-controller-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="10" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="14" cy="6" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteController2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2OutlineIcon],svg[solar-remote-controller-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.958 1.25h.084c1.369 0 2.454 0 3.32.088c.888.09 1.629.28 2.277.713c.519.346.964.791 1.31 1.31c.434.648.623 1.39.713 2.277c.088.866.088 1.951.088 3.32v6.084c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32V8.958c0-1.369 0-2.454.088-3.32c.09-.888.28-1.629.713-2.277a4.8 4.8 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713c.866-.088 1.951-.088 3.32-.088M8.79 2.83c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.896c-.241.361-.39.827-.468 1.596c-.08.781-.08 1.79-.08 3.21v6c0 1.42 0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08s2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21V9c0-1.42 0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.3 3.3 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468c-.781-.08-1.79-.08-3.21-.08s-2.429 0-3.21.08M12 13.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 15.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M11 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M15 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarRemoteController2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerBoldIcon],svg[solar-remote-controller-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 15.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104M12 11.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M8.25 5.5A.75.75 0 0 1 9 4.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteControllerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerBoldDuotoneIcon],svg[solar-remote-controller-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 15.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 4.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarRemoteControllerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerBrokenIcon],svg[solar-remote-controller-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 5.5h6"></svg:path><svg:circle cx="9" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="9" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteControllerBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerLineDuotoneIcon],svg[solar-remote-controller-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 5.5h6"></svg:path><svg:circle cx="9" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="9" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteControllerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerLinearIcon],svg[solar-remote-controller-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 5.5h6"></svg:path><svg:circle cx="9" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="9" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteControllerLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerMinimalisticBoldIcon],svg[solar-remote-controller-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 11a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104M12 7.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M13 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteControllerMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerMinimalisticBoldDuotoneIcon],svg[solar-remote-controller-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 11a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteControllerMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerMinimalisticBrokenIcon],svg[solar-remote-controller-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104c-.589.881-.663 2.064-.673 4.222M18.81 19c-.1.482-.252.875-.484 1.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15v-3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:circle cx="12" cy="5" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteControllerMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerMinimalisticLineDuotoneIcon],svg[solar-remote-controller-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:circle cx="12" cy="5" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteControllerMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerMinimalisticLinearIcon],svg[solar-remote-controller-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:circle cx="12" cy="5" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="17" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarRemoteControllerMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerMinimalisticOutlineIcon],svg[solar-remote-controller-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.958 1.25h.084c1.369 0 2.454 0 3.32.088c.888.09 1.629.28 2.277.713c.519.346.964.791 1.31 1.31c.434.648.623 1.39.713 2.277c.088.866.088 1.951.088 3.32v6.084c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32V8.958c0-1.369 0-2.454.088-3.32c.09-.888.28-1.629.713-2.277a4.8 4.8 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713c.866-.088 1.951-.088 3.32-.088M8.79 2.83c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.896c-.241.361-.39.827-.468 1.596c-.08.781-.08 1.79-.08 3.21v6c0 1.42 0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08s2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21V9c0-1.42 0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.3 3.3 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468c-.781-.08-1.79-.08-3.21-.08s-2.429 0-3.21.08M12 8.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 11a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarRemoteControllerMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerOutlineIcon],svg[solar-remote-controller-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.958 1.25h.084c1.369 0 2.454 0 3.32.088c.888.09 1.629.28 2.277.713c.519.346.964.791 1.31 1.31c.434.648.623 1.39.713 2.277c.088.866.088 1.951.088 3.32v6.084c0 1.369 0 2.454-.088 3.32c-.09.888-.28 1.629-.712 2.277a4.8 4.8 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713c-.866.088-1.951.088-3.32.088h-.084c-1.369 0-2.454 0-3.32-.088c-.888-.09-1.629-.28-2.277-.712a4.8 4.8 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277c-.088-.866-.088-1.951-.088-3.32V8.958c0-1.369 0-2.454.088-3.32c.09-.888.28-1.629.713-2.277a4.8 4.8 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713c.866-.088 1.951-.088 3.32-.088M8.79 2.83c-.77.079-1.235.227-1.596.468a3.3 3.3 0 0 0-.896.896c-.241.361-.39.827-.468 1.596c-.08.781-.08 1.79-.08 3.21v6c0 1.42 0 2.429.08 3.21c.079.77.227 1.235.468 1.596c.237.354.542.66.896.896c.361.241.827.39 1.596.468c.781.08 1.79.08 3.21.08s2.429 0 3.21-.08c.77-.079 1.235-.227 1.596-.468c.354-.237.66-.542.896-.896c.241-.361.39-.827.468-1.596c.08-.781.08-1.79.08-3.21V9c0-1.42 0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.3 3.3 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468c-.781-.08-1.79-.08-3.21-.08s-2.429 0-3.21.08M8.25 5.5A.75.75 0 0 1 9 4.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M12 13.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 15.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class SolarRemoteControllerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoveFolderBoldIcon],svg[solar-remove-folder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257M9.25 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoveFolderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoveFolderBoldDuotoneIcon],svg[solar-remove-folder-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.25 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarRemoveFolderBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoveFolderBrokenIcon],svg[solar-remove-folder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M14 14h-4m12-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></svg:path>`,
})
export class SolarRemoveFolderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoveFolderLineDuotoneIcon],svg[solar-remove-folder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 14h-4" opacity=".5"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarRemoveFolderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoveFolderLinearIcon],svg[solar-remove-folder-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 14h-4"></svg:path><svg:path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path></svg:g>`,
})
export class SolarRemoveFolderLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoveFolderOutlineIcon],svg[solar-remove-folder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37q.328.182.689.286c.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102c.841.106 1.556.332 2.144.86q.147.133.28.28c.529.588.754 1.303.86 2.144c.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082m.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.267-.09-2.975c-.087-.689-.246-1.06-.487-1.328a2 2 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487c-.707-.089-1.639-.09-2.975-.09h-.484c-1.048 0-1.724 0-2.363-.182c-.35-.1-.689-.24-1.008-.417c-.58-.324-1.058-.801-1.8-1.543l-.077-.078l-.55-.55a8 8 0 0 0-.503-.482a3.25 3.25 0 0 0-1.771-.734a8 8 0 0 0-.696-.014M9.25 14a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoveFolderOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReorderBoldIcon],svg[solar-reorder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M19 18.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5zm.75-4.75a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75M19 10.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5zM19.75 6a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarReorderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReorderBoldDuotoneIcon],svg[solar-reorder-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.75 10a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0-8a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0 12a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class SolarReorderBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReorderBrokenIcon],svg[solar-reorder-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 10h-8m-6 0h2m-2 8h8m6 0h-2m2-4H5m14-8H5"></svg:path>`,
})
export class SolarReorderBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReorderLineDuotoneIcon],svg[solar-reorder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C3.098 15 3.565 15 4.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C7 16.098 7 16.565 7 17.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C5.902 20 5.435 20 4.5 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C2 18.902 2 18.435 2 17.5Z"></svg:path><svg:path d="M9.5 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 15 11.065 15 12 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 20 12.935 20 12 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75Z" opacity=".5"></svg:path><svg:path d="M17 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C18.098 15 18.565 15 19.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C17 18.902 17 18.435 17 17.5Z" opacity=".7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15V9c0-2.357 0-3.536.732-4.268S7.143 4 9.5 4h5c2.357 0 3.535 0 4.268.732S19.5 6.643 19.5 9v3m0 0l2-2m-2 2l-2-2"></svg:path></svg:g>`,
})
export class SolarReorderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReorderLinearIcon],svg[solar-reorder-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C3.098 15 3.565 15 4.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C7 16.098 7 16.565 7 17.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C5.902 20 5.435 20 4.5 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C2 18.902 2 18.435 2 17.5Zm7.5 0c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 15 11.065 15 12 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 20 12.935 20 12 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75Zm7.5 0c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C18.098 15 18.565 15 19.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C17 18.902 17 18.435 17 17.5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15V9c0-2.357 0-3.536.732-4.268S7.143 4 9.5 4h5c2.357 0 3.535 0 4.268.732S19.5 6.643 19.5 9v3m0 0l2-2m-2 2l-2-2"></svg:path></svg:g>`,
})
export class SolarReorderLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReorderOutlineIcon],svg[solar-reorder-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.75 10a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0-8a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75m0 12a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarReorderOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatBoldIcon],svg[solar-repeat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5a.75.75 0 0 1 .75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRepeatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatBoldDuotoneIcon],svg[solar-repeat-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.53 2.47a.75.75 0 0 0-1.06 1.06l.72.72H9a7.75 7.75 0 1 0 0 15.5h.5a.75.75 0 0 0 0-1.5H9a6.25 6.25 0 0 1 0-12.5h2a.75.75 0 0 0 .53-1.28z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.5 4.25a.75.75 0 0 0 0 1.5h.5a6.25 6.25 0 1 1 0 12.5h-2a.75.75 0 0 0-.53 1.28l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H15a7.75 7.75 0 0 0 0-15.5z" opacity=".5"></svg:path>`,
})
export class SolarRepeatBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatBrokenIcon],svg[solar-repeat-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM1.25 12a.75.75 0 0 0 1.5 0zm2.62 3.57a.75.75 0 0 0-1.23.86zm5.63 2.68H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zm-.11 4.43A7.74 7.74 0 0 0 9 19.75v-1.5a6.24 6.24 0 0 1-5.13-2.68zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zM22.75 12a.75.75 0 0 0-1.5 0zm-2.62-3.57a.75.75 0 1 0 1.23-.86zM15 18.25h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm.11-4.43A7.74 7.74 0 0 0 15 4.25v1.5c2.123 0 4 1.058 5.13 2.68z"></svg:path>`,
})
export class SolarRepeatBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatLineDuotoneIcon],svg[solar-repeat-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12z"></svg:path><svg:path fill="currentColor" d="M13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12z" opacity=".5"></svg:path>`,
})
export class SolarRepeatLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatLinearIcon],svg[solar-repeat-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12z"></svg:path>`,
})
export class SolarRepeatLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneBoldIcon],svg[solar-repeat-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5a.75.75 0 0 1 .75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75m-1.463 4.307a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarRepeatOneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneBoldDuotoneIcon],svg[solar-repeat-one-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.53 2.47a.75.75 0 0 0-1.06 1.06l.72.72H9a7.75 7.75 0 1 0 0 15.5h.5a.75.75 0 0 0 0-1.5H9a6.25 6.25 0 0 1 0-12.5h2a.75.75 0 0 0 .53-1.28zm4.97 1.78a.75.75 0 0 0 0 1.5h.5a6.25 6.25 0 1 1 0 12.5h-2a.75.75 0 0 0-.53 1.28l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H15a7.75 7.75 0 0 0 0-15.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.75 10a.75.75 0 0 0-1.28-.53l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V14a.75.75 0 0 0 1.5 0z" opacity=".5"></svg:path>`,
})
export class SolarRepeatOneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneBrokenIcon],svg[solar-repeat-one-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 11.5L12 10v4"></svg:path><svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM1.25 12a.75.75 0 0 0 1.5 0zm2.62 3.57a.75.75 0 0 0-1.23.86zm5.63 2.68H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zm-.11 4.43A7.74 7.74 0 0 0 9 19.75v-1.5a6.24 6.24 0 0 1-5.13-2.68zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zM22.75 12a.75.75 0 0 0-1.5 0zm-2.62-3.57a.75.75 0 1 0 1.23-.86zM15 18.25h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm.11-4.43A7.74 7.74 0 0 0 15 4.25v1.5c2.123 0 4 1.058 5.13 2.68z"></svg:path></svg:g>`,
})
export class SolarRepeatOneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneLineDuotoneIcon],svg[solar-repeat-one-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12z"></svg:path><svg:path fill="currentColor" d="M13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 11.5L12 10v4"></svg:path></svg:g>`,
})
export class SolarRepeatOneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneLinearIcon],svg[solar-repeat-one-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 11.5L12 10v4"></svg:path></svg:g>`,
})
export class SolarRepeatOneLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneMinimalisticBoldIcon],svg[solar-repeat-one-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.716 3.203a.7.7 0 0 1 .987 0l1.86 1.846c.2.198.26.496.151.754a.7.7 0 0 1-.644.428H9.21C5.997 6.23 3.394 8.814 3.394 12S6 17.77 9.21 17.77h.464c.386 0 .698.31.698.692a.695.695 0 0 1-.698.692H9.21C5.228 19.154 2 15.95 2 12s3.228-7.154 7.21-7.154h.175l-.669-.664a.69.69 0 0 1 0-.98m4.912 2.336c0-.382.312-.692.698-.692h.465C18.772 4.846 22 8.05 22 12s-3.228 7.154-7.21 7.154h-.175l.669.664a.69.69 0 0 1 0 .98a.7.7 0 0 1-.987 0l-1.86-1.847a.69.69 0 0 1-.151-.754a.7.7 0 0 1 .644-.428h1.86c3.212 0 5.815-2.583 5.815-5.769s-2.603-5.77-5.814-5.77h-.465a.695.695 0 0 1-.698-.692" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.488 12c0-2.04 1.666-3.692 3.721-3.692h5.582c2.055 0 3.72 1.653 3.72 3.692s-1.665 3.692-3.72 3.692H9.209c-2.055 0-3.72-1.653-3.72-3.692"></svg:path>`,
})
export class SolarRepeatOneMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneMinimalisticBoldDuotoneIcon],svg[solar-repeat-one-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.716 3.203a.7.7 0 0 1 .987 0l1.86 1.846c.2.198.26.496.151.754a.7.7 0 0 1-.644.428H9.21C5.997 6.23 3.394 8.814 3.394 12S6 17.77 9.21 17.77h.464c.386 0 .698.31.698.692a.695.695 0 0 1-.698.692H9.21C5.228 19.154 2 15.95 2 12s3.228-7.154 7.21-7.154h.175l-.669-.664a.69.69 0 0 1 0-.98m4.912 2.336c0-.382.312-.692.698-.692h.465C18.772 4.846 22 8.05 22 12s-3.228 7.154-7.21 7.154h-.175l.669.664a.69.69 0 0 1 0 .98a.7.7 0 0 1-.987 0l-1.86-1.847a.69.69 0 0 1-.151-.754a.7.7 0 0 1 .644-.428h1.86c3.212 0 5.815-2.583 5.815-5.769s-2.603-5.77-5.814-5.77h-.465a.695.695 0 0 1-.698-.692" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.488 12c0-2.04 1.666-3.692 3.721-3.692h5.582c2.055 0 3.72 1.653 3.72 3.692s-1.665 3.692-3.72 3.692H9.209c-2.055 0-3.72-1.653-3.72-3.692" opacity=".5"></svg:path>`,
})
export class SolarRepeatOneMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneMinimalisticBrokenIcon],svg[solar-repeat-one-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 12H8"></svg:path><svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM1.25 12a.75.75 0 0 0 1.5 0zm2.62 3.57a.75.75 0 0 0-1.23.86zm5.63 2.68H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM2.75 12A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zm-.11 4.43A7.74 7.74 0 0 0 9 19.75v-1.5a6.24 6.24 0 0 1-5.13-2.68zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zM22.75 12a.75.75 0 0 0-1.5 0zm-2.62-3.57a.75.75 0 1 0 1.23-.86zM15 18.25h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm.11-4.43A7.74 7.74 0 0 0 15 4.25v1.5c2.123 0 4 1.058 5.13 2.68z"></svg:path></svg:g>`,
})
export class SolarRepeatOneMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneMinimalisticLineDuotoneIcon],svg[solar-repeat-one-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12z"></svg:path><svg:path fill="currentColor" d="M13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 12H8"></svg:path></svg:g>`,
})
export class SolarRepeatOneMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneMinimalisticLinearIcon],svg[solar-repeat-one-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28l-2-2l-1.06 1.06l2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12zM13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28l2 2l1.06-1.06l-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 12H8"></svg:path></svg:g>`,
})
export class SolarRepeatOneMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneMinimalisticOutlineIcon],svg[solar-repeat-one-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5a.75.75 0 0 1 .75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75m-6.5 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRepeatOneMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneOutlineIcon],svg[solar-repeat-one-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5a.75.75 0 0 1 .75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75m-1.463 4.307a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarRepeatOneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOutlineIcon],svg[solar-repeat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5a.75.75 0 0 1 .75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRepeatOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReply2BoldIcon],svg[solar-reply-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.5 6.25a.75.75 0 0 1 .75.75c0 2.244-.952 3.72-2.187 4.609c-1.196.861-2.61 1.141-3.563 1.141H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72h8.19c.713 0 1.8-.22 2.687-.859c.848-.61 1.563-1.635 1.563-3.391a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarReply2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReply2BoldDuotoneIcon],svg[solar-reply-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.03 17.53a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06L5.56 12l4.47 4.47a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.31 12.75h8.19c.953 0 2.367-.28 3.563-1.141c1.235-.89 2.187-2.365 2.187-4.609a.75.75 0 0 0-1.5 0c0 1.756-.715 2.78-1.563 3.391c-.887.639-1.974.859-2.687.859H6.31l-.75.75zm-2.503-.463" opacity=".5"></svg:path>`,
})
export class SolarReply2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReply2BrokenIcon],svg[solar-reply-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 12l5 5m-5-5l5-5m-5 5H11m3.5 0c1.667 0 5-1 5-5"></svg:path>`,
})
export class SolarReply2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReply2LineDuotoneIcon],svg[solar-reply-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9.5 17l-5-5l5-5"></svg:path><svg:path d="M4.5 12h10c1.667 0 5-1 5-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarReply2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReply2LinearIcon],svg[solar-reply-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 12l5 5m-5-5l5-5m-5 5h10c1.667 0 5-1 5-5"></svg:path>`,
})
export class SolarReply2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReply2OutlineIcon],svg[solar-reply-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.5 6.25a.75.75 0 0 1 .75.75c0 2.244-.952 3.72-2.187 4.609c-1.196.861-2.61 1.141-3.563 1.141H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72h8.19c.713 0 1.8-.22 2.687-.859c.848-.61 1.563-1.635 1.563-3.391a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarReply2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReplyBoldIcon],svg[solar-reply-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.03 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72h8.19c.953 0 2.367.28 3.563 1.141c1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391c-.887-.639-1.974-.859-2.687-.859H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarReplyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReplyBoldDuotoneIcon],svg[solar-reply-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.03 6.47a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 1 0 1.06-1.06L5.56 12l4.47-4.47a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.31 11.25h8.19c.953 0 2.367.28 3.563 1.141c1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391c-.887-.639-1.974-.859-2.687-.859H6.31L5.56 12zm-2.503.463" opacity=".5"></svg:path>`,
})
export class SolarReplyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReplyBrokenIcon],svg[solar-reply-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 12l5-5m-5 5l5 5m-5-5H11m3.5 0c1.667 0 5 1 5 5"></svg:path>`,
})
export class SolarReplyBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReplyLineDuotoneIcon],svg[solar-reply-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m9.5 7l-5 5l5 5"></svg:path><svg:path d="M4.5 12h10c1.667 0 5 1 5 5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarReplyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReplyLinearIcon],svg[solar-reply-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 12l5-5m-5 5l5 5m-5-5h10c1.667 0 5 1 5 5"></svg:path>`,
})
export class SolarReplyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReplyOutlineIcon],svg[solar-reply-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.03 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72h8.19c.953 0 2.367.28 3.563 1.141c1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391c-.887-.639-1.974-.859-2.687-.859H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarReplyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartBoldIcon],svg[solar-restart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.258 3.508a.75.75 0 0 1 .463.693v4.243a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1-.53-1.28L14.8 6.31a7.25 7.25 0 1 0 4.393 5.783a.75.75 0 0 1 1.488-.187A8.75 8.75 0 1 1 15.93 5.18l1.51-1.51a.75.75 0 0 1 .817-.162"></svg:path>`,
})
export class SolarRestartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartBoldDuotoneIcon],svg[solar-restart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.873 7.873a7.25 7.25 0 0 1 7.928-1.563l1.13-1.13a8.75 8.75 0 1 0 4.751 6.727a.75.75 0 0 0-1.488.187a7.25 7.25 0 1 1-12.32-4.22" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.721 4.201a.75.75 0 0 0-1.28-.53l-1.51 1.51l-1.13 1.13l-1.603 1.603a.75.75 0 0 0 .53 1.28h4.243a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class SolarRestartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartBrokenIcon],svg[solar-restart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#solarRestartBroken0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.729 10.929A8.003 8.003 0 0 1 8.5 20.197M18.363 8.05l-.707-.707A8 8 0 0 0 5.754 18m12.61-9.95h-4.243m4.243 0V3.809"></svg:path></svg:g><svg:defs><svg:clippath id="solarRestartBroken0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarRestartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleBoldIcon],svg[solar-restart-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m3.935-16.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.17 4.17 0 0 0 5.998 0a4.4 4.4 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77c.406 0 .742.325.703.729a5.9 5.9 0 0 1-1.65 3.562a5.67 5.67 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.67 5.67 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17" clip-rule="evenodd"></svg:path>`,
})
export class SolarRestartCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleBoldDuotoneIcon],svg[solar-restart-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M16.402 6.286a.75.75 0 0 0-1.287-.524l-.75.768a5.67 5.67 0 0 0-6.437 1.208c-2.237 2.29-2.237 5.996 0 8.287a5.67 5.67 0 0 0 8.144 0a5.93 5.93 0 0 0 1.634-4.874a.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.643a4.17 4.17 0 0 1-5.998 0c-1.668-1.707-1.668-4.483 0-6.19a4.17 4.17 0 0 1 4.224-1.089l-.761.78A.75.75 0 0 0 13 9.75h2.652a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class SolarRestartCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleBrokenIcon],svg[solar-restart-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRestartCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleLineDuotoneIcon],svg[solar-restart-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path></svg:g>`,
})
export class SolarRestartCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleLinearIcon],svg[solar-restart-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path></svg:g>`,
})
export class SolarRestartCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleOutlineIcon],svg[solar-restart-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.728 6a.75.75 0 0 0-1.5 0v1.023a5.665 5.665 0 0 0-7.3.715c-2.237 2.29-2.237 5.997 0 8.287a5.67 5.67 0 0 0 8.144 0a5.93 5.93 0 0 0 1.634-4.874a.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.644a4.17 4.17 0 0 1-5.998 0c-1.668-1.708-1.668-4.483 0-6.19a4.17 4.17 0 0 1 4.883-.822h-.558a.75.75 0 0 0 0 1.5h2.651a.75.75 0 0 0 .75-.75z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRestartCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartLineDuotoneIcon],svg[solar-restart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#solarRestartLineDuotone0)"><svg:path d="M19.729 10.929a8 8 0 1 1-2.072-3.585l.707.706" opacity=".5"></svg:path><svg:path d="M14.121 8.05h4.243V3.808"></svg:path></svg:g><svg:defs><svg:clippath id="solarRestartLineDuotone0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SolarRestartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartLinearIcon],svg[solar-restart-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.364 8.05l-.707-.707a8 8 0 1 0 2.28 4.658m-1.573-3.95h-4.243m4.243 0V3.807"></svg:path>`,
})
export class SolarRestartLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartOutlineIcon],svg[solar-restart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.364 3.058a.75.75 0 0 1 .75.75V8.05a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.36a7.251 7.251 0 1 0 2.523 3.822a.75.75 0 1 1 1.45-.387a8.75 8.75 0 1 1-2.84-4.447v-2.48a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRestartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartSquareBoldIcon],svg[solar-restart-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m13.935-6.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.17 4.17 0 0 0 5.998 0a4.4 4.4 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77c.406 0 .742.325.703.729a5.9 5.9 0 0 1-1.65 3.562a5.67 5.67 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.67 5.67 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17" clip-rule="evenodd"></svg:path>`,
})
export class SolarRestartSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartSquareBoldDuotoneIcon],svg[solar-restart-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.402 6.286a.75.75 0 0 0-1.287-.524l-.75.768a5.67 5.67 0 0 0-6.437 1.208c-2.237 2.29-2.237 5.996 0 8.287a5.67 5.67 0 0 0 8.144 0a5.93 5.93 0 0 0 1.634-4.874a.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.643a4.17 4.17 0 0 1-5.998 0c-1.668-1.707-1.668-4.483 0-6.19a4.17 4.17 0 0 1 4.224-1.089l-.761.78A.75.75 0 0 0 13 9.75h2.652a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class SolarRestartSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartSquareBrokenIcon],svg[solar-restart-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path><svg:path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarRestartSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartSquareLineDuotoneIcon],svg[solar-restart-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path></svg:g>`,
})
export class SolarRestartSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartSquareLinearIcon],svg[solar-restart-square-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6"></svg:path></svg:g>`,
})
export class SolarRestartSquareLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartSquareOutlineIcon],svg[solar-restart-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.728 6a.75.75 0 0 0-1.5 0v1.023a5.665 5.665 0 0 0-7.3.715c-2.237 2.29-2.237 5.997 0 8.287a5.67 5.67 0 0 0 8.144 0a5.93 5.93 0 0 0 1.634-4.874a.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.644a4.17 4.17 0 0 1-5.998 0c-1.668-1.708-1.668-4.483 0-6.19a4.17 4.17 0 0 1 4.883-.822h-.558a.75.75 0 0 0 0 1.5h2.651a.75.75 0 0 0 .75-.75z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"></svg:path>`,
})
export class SolarRestartSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRevoteBoldIcon],svg[solar-revote-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.435.306A.75.75 0 0 1 10.9 1v.978l1.083-.001h.075c2.072 0 3.705 0 4.981.174c1.31.179 2.356.554 3.177 1.387c.82.832 1.187 1.89 1.363 3.214c.171 1.293.171 2.95.171 5.055v.113c0 2.105 0 3.761-.171 5.054c-.176 1.326-.543 2.382-1.363 3.214c-.82.834-1.866 1.209-3.177 1.388c-1.276.174-2.909.174-4.981.174h-.116c-2.072 0-3.705 0-4.981-.174c-1.31-.18-2.356-.554-3.177-1.388c-.82-.832-1.187-1.888-1.363-3.214c-.171-1.293-.171-2.949-.171-5.054v-.113c0-2.106 0-3.762.171-5.055c.176-1.325.543-2.382 1.363-3.214a.75.75 0 1 1 1.068 1.053c-.498.506-.79 1.195-.944 2.358c-.156 1.183-.158 2.74-.158 4.914c0 2.175.002 3.731.158 4.915c.154 1.162.446 1.852.944 2.358c.497.504 1.172.798 2.312.954c1.163.158 2.693.16 4.836.16s3.673-.002 4.836-.16c1.14-.156 1.815-.45 2.312-.954c.498-.506.79-1.196.944-2.358c.157-1.184.158-2.74.158-4.915s-.002-3.73-.158-4.914c-.154-1.163-.446-1.852-.944-2.358c-.497-.504-1.171-.798-2.312-.954c-1.163-.159-2.693-.16-4.836-.16h-1.1v1.077a.75.75 0 0 1-1.284.526l-1.75-1.777a.75.75 0 0 1 0-1.052L9.616.474a.75.75 0 0 1 .819-.168" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.03 10.03a.75.75 0 0 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class SolarRevoteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRevoteBoldDuotoneIcon],svg[solar-revote-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.435.306A.75.75 0 0 1 10.9 1v.978l1.083-.001h.075c2.072 0 3.705 0 4.981.174c1.31.179 2.356.554 3.177 1.387c.82.832 1.187 1.89 1.363 3.214c.171 1.293.171 2.95.171 5.055v.113c0 2.105 0 3.761-.171 5.054c-.176 1.326-.543 2.382-1.363 3.214c-.82.834-1.866 1.209-3.177 1.388c-1.276.174-2.909.174-4.981.174h-.116c-2.072 0-3.705 0-4.981-.174c-1.31-.18-2.356-.554-3.177-1.388c-.82-.832-1.187-1.888-1.363-3.214c-.171-1.293-.171-2.949-.171-5.054v-.113c0-2.106 0-3.762.171-5.055c.176-1.325.543-2.382 1.363-3.214a.75.75 0 1 1 1.068 1.053c-.498.506-.79 1.195-.944 2.358c-.156 1.183-.158 2.74-.158 4.914c0 2.175.002 3.731.158 4.915c.154 1.162.446 1.852.944 2.358c.497.504 1.172.798 2.312.954c1.163.158 2.693.16 4.836.16s3.673-.002 4.836-.16c1.14-.156 1.815-.45 2.312-.954c.498-.506.79-1.196.944-2.358c.157-1.184.158-2.74.158-4.915s-.002-3.73-.158-4.914c-.154-1.163-.446-1.852-.944-2.358c-.497-.504-1.171-.798-2.312-.954c-1.163-.159-2.693-.16-4.836-.16h-1.1v1.077a.75.75 0 0 1-1.284.526l-1.75-1.777a.75.75 0 0 1 0-1.052L9.616.474a.75.75 0 0 1 .819-.168" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class SolarRevoteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRevoteBrokenIcon],svg[solar-revote-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m19.682 19.662l.534.526zm0-15.597l-.534.526zm-14.83.526a.75.75 0 0 0-1.068-1.053zM8.4 2.777l-.534-.526a.75.75 0 0 0 0 1.052zM9.616 5.08a.75.75 0 1 0 1.069-1.052zm1.069-3.554A.75.75 0 1 0 9.616.474zM21.75 12a.75.75 0 0 0-1.5 0zm-1.56-3.957a.75.75 0 0 0 1.498-.086zM12 20.25c-2.143 0-3.673-.002-4.836-.16c-1.14-.156-1.815-.45-2.312-.954l-1.068 1.052c.82.834 1.866 1.209 3.177 1.388c1.288.175 2.94.174 5.039.174zm-9.75-8.387c0 2.133-.002 3.807.171 5.111c.176 1.325.543 2.382 1.363 3.214l1.068-1.052c-.498-.506-.79-1.196-.944-2.358c-.156-1.184-.158-2.74-.158-4.915zM12 21.75c2.1 0 3.751.002 5.04-.174c1.31-.18 2.355-.554 3.176-1.388l-1.068-1.052c-.497.504-1.171.798-2.312.954c-1.163.158-2.693.16-4.836.16zm0-18.273c2.143 0 3.673.001 4.836.16c1.14.156 1.815.45 2.312.954l1.068-1.053c-.82-.833-1.866-1.208-3.177-1.387c-1.288-.176-2.94-.174-5.039-.174zm-8.25 8.386c0-2.174.002-3.73.158-4.914c.154-1.163.446-1.852.944-2.358L3.784 3.538c-.82.832-1.187 1.89-1.363 3.214c-.173 1.305-.171 2.979-.171 5.111zM12 1.977c-1.415 0-2.62 0-3.638.051l.076 1.498c.972-.049 2.134-.05 3.562-.05zM7.866 3.303l1.75 1.777l1.069-1.052l-1.75-1.777zm1.068 0l1.75-1.777L9.617.474L7.866 2.25zM20.25 12c0 2.127-.005 3.653-.163 4.814c-.155 1.14-.446 1.82-.94 2.322l1.07 1.052c.81-.823 1.178-1.866 1.356-3.171c.175-1.285.177-2.929.177-5.017zm1.438-4.043c-.11-1.913-.422-3.353-1.472-4.419l-1.068 1.053c.64.65.936 1.6 1.043 3.452z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarRevoteBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRevoteLineDuotoneIcon],svg[solar-revote-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4.852 4.591A.75.75 0 0 0 3.784 3.54zM8.4 2.777l-.534-.526a.75.75 0 0 0 0 1.053zm1.216 2.304a.75.75 0 1 0 1.069-1.053zm1.069-3.555A.75.75 0 1 0 9.616.474zM12 20.25c-2.143 0-3.673-.002-4.836-.16c-1.14-.156-1.815-.45-2.312-.954l-1.068 1.052c.82.834 1.866 1.209 3.177 1.388c1.288.176 2.94.174 5.039.174zm-9.75-8.386c0 2.132-.002 3.806.171 5.11c.176 1.326.543 2.382 1.363 3.214l1.068-1.052c-.498-.506-.79-1.195-.944-2.358c-.156-1.184-.158-2.74-.158-4.914zm18 0c0 2.174-.002 3.73-.158 4.914c-.154 1.163-.446 1.852-.944 2.358l1.068 1.052c.82-.832 1.187-1.888 1.363-3.213c.172-1.305.171-2.979.171-5.112zM12 21.75c2.1 0 3.751.002 5.04-.174c1.31-.179 2.355-.554 3.176-1.388l-1.068-1.052c-.497.504-1.171.798-2.312.954c-1.163.158-2.693.16-4.836.16zm0-18.273c2.143 0 3.673.002 4.836.16c1.14.156 1.815.45 2.312.954l1.068-1.052c-.82-.834-1.866-1.21-3.177-1.388c-1.288-.176-2.94-.174-5.039-.174zm9.75 8.387c0-2.133.002-3.807-.171-5.112c-.176-1.325-.543-2.381-1.363-3.213L19.148 4.59c.498.506.79 1.195.944 2.358c.157 1.184.158 2.74.158 4.915zm-18 0c0-2.175.002-3.731.158-4.915c.154-1.163.446-1.852.944-2.358L3.784 3.54c-.82.832-1.187 1.888-1.363 3.213c-.173 1.305-.171 2.979-.171 5.112zM12 1.976c-1.415 0-2.62 0-3.638.051l.076 1.498c.972-.049 2.134-.05 3.562-.05zM7.866 3.304l1.75 1.777l1.069-1.053l-1.75-1.777zm1.068 0l1.75-1.778L9.617.474L7.866 2.25z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarRevoteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRevoteLinearIcon],svg[solar-revote-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4.852 4.591A.75.75 0 0 0 3.784 3.54zM8.4 2.777l-.534-.526a.75.75 0 0 0 0 1.053zm1.216 2.304a.75.75 0 1 0 1.069-1.053zm1.069-3.555A.75.75 0 1 0 9.616.474zM12 20.25c-2.143 0-3.673-.002-4.836-.16c-1.14-.156-1.815-.45-2.312-.954l-1.068 1.052c.82.834 1.866 1.209 3.177 1.388c1.288.176 2.94.174 5.039.174zm-9.75-8.386c0 2.132-.002 3.806.171 5.11c.176 1.326.543 2.382 1.363 3.214l1.068-1.052c-.498-.506-.79-1.195-.944-2.358c-.156-1.184-.158-2.74-.158-4.914zm18 0c0 2.174-.002 3.73-.158 4.914c-.154 1.163-.446 1.852-.944 2.358l1.068 1.052c.82-.832 1.187-1.888 1.363-3.213c.172-1.305.171-2.979.171-5.112zM12 21.75c2.1 0 3.751.002 5.04-.174c1.31-.179 2.355-.554 3.176-1.388l-1.068-1.052c-.497.504-1.171.798-2.312.954c-1.163.158-2.693.16-4.836.16zm0-18.273c2.143 0 3.673.002 4.836.16c1.14.156 1.815.45 2.312.954l1.068-1.052c-.82-.834-1.866-1.21-3.177-1.388c-1.288-.176-2.94-.174-5.039-.174zm9.75 8.387c0-2.133.002-3.807-.171-5.112c-.176-1.325-.543-2.381-1.363-3.213L19.148 4.59c.498.506.79 1.195.944 2.358c.157 1.184.158 2.74.158 4.915zm-18 0c0-2.175.002-3.731.158-4.915c.154-1.163.446-1.852.944-2.358L3.784 3.54c-.82.832-1.187 1.888-1.363 3.213c-.173 1.305-.171 2.979-.171 5.112zM12 1.976c-1.415 0-2.62 0-3.638.051l.076 1.498c.972-.049 2.134-.05 3.562-.05zM7.866 3.304l1.75 1.777l1.069-1.053l-1.75-1.777zm1.068 0l1.75-1.778L9.617.474L7.866 2.25z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class SolarRevoteLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRevoteOutlineIcon],svg[solar-revote-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.685 1.526A.75.75 0 1 0 9.616.474L7.866 2.25a.75.75 0 0 0 0 1.052l1.75 1.777a.75.75 0 1 0 1.069-1.052l-.538-.546c.564-.005 1.179-.005 1.853-.005c2.143 0 3.673.001 4.836.16c1.14.156 1.815.45 2.312.954c.498.506.79 1.195.944 2.358c.157 1.183.158 2.74.158 4.914c0 2.175-.002 3.731-.158 4.915c-.154 1.162-.446 1.852-.944 2.358c-.497.504-1.171.798-2.312.954c-1.163.158-2.693.16-4.836.16s-3.673-.002-4.836-.16c-1.14-.156-1.815-.45-2.312-.954c-.498-.506-.79-1.196-.944-2.358c-.156-1.184-.158-2.74-.158-4.915s.002-3.73.158-4.914c.154-1.163.446-1.852.944-2.358a.75.75 0 0 0-1.068-1.053c-.82.832-1.187 1.89-1.363 3.214c-.171 1.293-.171 2.95-.171 5.055v.112c0 2.106 0 3.762.171 5.055c.176 1.325.543 2.382 1.363 3.214c.82.834 1.866 1.209 3.177 1.388c1.276.174 2.909.174 4.981.174h.116c2.072 0 3.705 0 4.981-.174c1.31-.18 2.356-.554 3.177-1.388c.82-.832 1.187-1.889 1.363-3.214c.171-1.293.171-2.949.171-5.054v-.113c0-2.106 0-3.762-.171-5.055c-.176-1.325-.543-2.382-1.363-3.214c-.82-.833-1.866-1.208-3.177-1.387c-1.276-.174-2.909-.174-4.981-.174h-.075q-.933-.001-1.746.004z"></svg:path><svg:path fill="currentColor" d="M16.03 10.03a.75.75 0 0 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class SolarRevoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackBoldIcon],svg[solar-rewind-10-seconds-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09M14.25 9.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z"></svg:path><svg:path d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackBoldDuotoneIcon],svg[solar-rewind-10-seconds-back-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 7.75a2.5 2.5 0 0 0-2.5 2.5v3.5a2.5 2.5 0 0 0 5 0v-3.5a2.5 2.5 0 0 0-2.5-2.5m0 1.5a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarRewind10SecondsBackBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackBrokenIcon],svg[solar-rewind-10-seconds-back-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-3.999M8 2.832A10 10 0 0 0 5 4.86A9.97 9.97 0 0 0 2 12q.002 1.03.2 2"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsBackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackLineDuotoneIcon],svg[solar-rewind-10-seconds-back-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsBackLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackLinearIcon],svg[solar-rewind-10-seconds-back-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsBackLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackOutlineIcon],svg[solar-rewind-10-seconds-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.324 1.675A.75.75 0 0 1 12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374a9.25 9.25 0 1 0 5.382-.617l.904 1.13a.75.75 0 0 1-1.172.937l-2-2.5a.75.75 0 0 1-.09-.794m-1 6.149a.75.75 0 0 1 .426.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.938-1.172l2.5-2a.75.75 0 0 1 .794-.09M14.25 9.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewind10SecondsBackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsForwardBoldIcon],svg[solar-rewind-10-seconds-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09M14.25 9.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z"></svg:path><svg:path d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsForwardBoldDuotoneIcon],svg[solar-rewind-10-seconds-forward-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 7.75a2.5 2.5 0 0 0-2.5 2.5v3.5a2.5 2.5 0 0 0 5 0v-3.5a2.5 2.5 0 0 0-2.5-2.5m0 1.5a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarRewind10SecondsForwardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsForwardBrokenIcon],svg[solar-rewind-10-seconds-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12q.002 1.03.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-8-4"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsForwardLineDuotoneIcon],svg[solar-rewind-10-seconds-forward-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-4.1-2.468-7.625-6-9.168" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsForwardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsForwardLinearIcon],svg[solar-rewind-10-seconds-forward-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-4.1-2.468-7.625-6-9.168"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsForwardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsForwardOutlineIcon],svg[solar-rewind-10-seconds-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25a.75.75 0 0 1 .586 1.219l-2 2.5a.75.75 0 0 1-1.172-.938l.903-1.128A9.25 9.25 0 0 0 2.75 12A9.25 9.25 0 1 0 15.7 3.52a.75.75 0 0 1 .6-1.375A10.75 10.75 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12m9.075-4.176a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.938-1.172l2.5-2a.75.75 0 0 1 .794-.09M14.25 9.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewind10SecondsForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackBoldIcon],svg[solar-rewind-15-seconds-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09m2.35.78a1.25 1.25 0 0 1 1.185-.854h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackBoldDuotoneIcon],svg[solar-rewind-15-seconds-back-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09m2.35.781a1.25 1.25 0 0 1 1.185-.855h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarRewind15SecondsBackBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackBrokenIcon],svg[solar-rewind-15-seconds-back-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-3.999M8 2.832A10 10 0 0 0 5 4.86A9.97 9.97 0 0 0 2 12q.002 1.03.2 2"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsBackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackLineDuotoneIcon],svg[solar-rewind-15-seconds-back-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168" opacity=".5"></svg:path><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsBackLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackLinearIcon],svg[solar-rewind-15-seconds-back-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168"></svg:path><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsBackLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackOutlineIcon],svg[solar-rewind-15-seconds-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.324 1.675A.75.75 0 0 1 12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374a9.25 9.25 0 1 0 5.382-.617l.904 1.13a.75.75 0 0 1-1.172.937l-2-2.5a.75.75 0 0 1-.09-.794m-1 6.149a.75.75 0 0 1 .426.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.938-1.172l2.5-2a.75.75 0 0 1 .794-.09m2.35.78a1.25 1.25 0 0 1 1.186-.854h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645zm.757 2.475" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewind15SecondsBackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsForwardBoldIcon],svg[solar-rewind-15-seconds-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09m2.35.78a1.25 1.25 0 0 1 1.185-.854h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsForwardBoldDuotoneIcon],svg[solar-rewind-15-seconds-forward-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09m2.35.781a1.25 1.25 0 0 1 1.185-.855h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarRewind15SecondsForwardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsForwardBrokenIcon],svg[solar-rewind-15-seconds-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12q.002 1.03.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-8-4"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsForwardLineDuotoneIcon],svg[solar-rewind-15-seconds-forward-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-4.1-2.468-7.625-6-9.168" opacity=".5"></svg:path><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsForwardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsForwardLinearIcon],svg[solar-rewind-15-seconds-forward-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-4.1-2.468-7.625-6-9.168"></svg:path><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsForwardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsForwardOutlineIcon],svg[solar-rewind-15-seconds-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25a.75.75 0 0 1 .586 1.219l-2 2.5a.75.75 0 0 1-1.172-.938l.903-1.128A9.25 9.25 0 0 0 2.75 12A9.25 9.25 0 1 0 15.7 3.52a.75.75 0 0 1 .6-1.375A10.75 10.75 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12m9.075-4.176a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.938-1.172l2.5-2a.75.75 0 0 1 .794-.09m2.35.78a1.25 1.25 0 0 1 1.185-.854h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645zm.756 2.475" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewind15SecondsForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsBackBoldIcon],svg[solar-rewind-5-seconds-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsBackBoldDuotoneIcon],svg[solar-rewind-5-seconds-back-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarRewind5SecondsBackBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsBackBrokenIcon],svg[solar-rewind-5-seconds-back-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-3.999M8 2.832A10 10 0 0 0 5 4.86A9.97 9.97 0 0 0 2 12q.002 1.03.2 2"></svg:path><svg:path d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsBackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsBackLineDuotoneIcon],svg[solar-rewind-5-seconds-back-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168" opacity=".5"></svg:path><svg:path d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsBackLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsBackLinearIcon],svg[solar-rewind-5-seconds-back-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168"></svg:path><svg:path d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsBackLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsBackOutlineIcon],svg[solar-rewind-5-seconds-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.324 1.675A.75.75 0 0 1 12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374a9.25 9.25 0 1 0 5.382-.617l.904 1.13a.75.75 0 0 1-1.172.937l-2-2.5a.75.75 0 0 1-.09-.794m-1.15 6.93a1.25 1.25 0 0 1 1.186-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645zm.757 2.474" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewind5SecondsBackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsForwardBoldIcon],svg[solar-rewind-5-seconds-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsForwardBoldDuotoneIcon],svg[solar-rewind-5-seconds-forward-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarRewind5SecondsForwardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsForwardBrokenIcon],svg[solar-rewind-5-seconds-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12q.002 1.03.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.98 9.98 0 0 1-8-4"></svg:path><svg:path d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsForwardLineDuotoneIcon],svg[solar-rewind-5-seconds-forward-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-4.1-2.468-7.625-6-9.168" opacity=".5"></svg:path><svg:path d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsForwardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsForwardLinearIcon],svg[solar-rewind-5-seconds-forward-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M10 4.5L12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-4.1-2.468-7.625-6-9.168"></svg:path><svg:path d="M14 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H12a2 2 0 1 1 0 4h-2"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsForwardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsForwardOutlineIcon],svg[solar-rewind-5-seconds-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25a.75.75 0 0 1 .586 1.219l-2 2.5a.75.75 0 0 1-1.172-.938l.903-1.128A9.25 9.25 0 0 0 2.75 12A9.25 9.25 0 1 0 15.7 3.52a.75.75 0 0 1 .6-1.375A10.75 10.75 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12m8.925-3.395a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645zm.756 2.474" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewind5SecondsForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackBoldIcon],svg[solar-rewind-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17.574V6.426c0-1.847-1.6-3.015-2.903-2.118L13 8.768V7.123c0-1.616-1.467-2.638-2.661-1.853L2.92 10.147c-1.228.807-1.228 2.899 0 3.706l7.418 4.877c1.194.785 2.661-.237 2.661-1.853v-1.645l6.097 4.46c1.302.897 2.903-.27 2.903-2.118"></svg:path>`,
})
export class SolarRewindBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackBoldDuotoneIcon],svg[solar-rewind-back-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 6.426v11.148c0 1.847-1.6 3.015-2.903 2.118L13 15.232V8.768l6.097-4.46C20.399 3.411 22 4.58 22 6.426" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 7.123v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706l7.42-4.877c1.193-.785 2.66.237 2.66 1.853"></svg:path>`,
})
export class SolarRewindBackBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackBrokenIcon],svg[solar-rewind-back-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m13 15.232l6.097 4.46c1.302.897 2.903-.27 2.903-2.118V15m-9-6.232l6.097-4.46C20.399 3.411 22 4.578 22 6.426V11M6.63 7.708l3.71-2.438c1.193-.785 2.66.237 2.66 1.853v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706l.928-.61"></svg:path>`,
})
export class SolarRewindBackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackCircleBoldIcon],svg[solar-rewind-back-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M10.564 7.461a.75.75 0 1 1 .872 1.22l-3.222 2.302a1.25 1.25 0 0 0 0 2.034l3.222 2.301a.75.75 0 0 1-.872 1.22l-3.222-2.3a2.75 2.75 0 0 1 0-4.476zm5.936 7.67V8.87a1 1 0 0 0-1.555-.832l-4.697 3.131a1 1 0 0 0 0 1.664l4.697 3.132a1 1 0 0 0 1.555-.832" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewindBackCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackCircleBoldDuotoneIcon],svg[solar-rewind-back-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.564 7.461a.75.75 0 1 1 .871 1.22l-3.221 2.302a1.25 1.25 0 0 0 0 2.034l3.221 2.301a.75.75 0 1 1-.871 1.22l-3.222-2.3a2.75 2.75 0 0 1 0-4.476z"></svg:path><svg:path fill="currentColor" d="M16.5 15.132V8.869a1 1 0 0 0-1.555-.832l-4.697 3.131a1 1 0 0 0 0 1.664l4.697 3.132a1 1 0 0 0 1.555-.832"></svg:path>`,
})
export class SolarRewindBackCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackCircleBrokenIcon],svg[solar-rewind-back-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m11 8.071l-3.222 2.302a2 2 0 0 0 0 3.254L11 15.93m5.5-.872V8.943a1 1 0 0 0-1.581-.814l-4.28 3.057a1 1 0 0 0 0 1.628l4.28 3.057a1 1 0 0 0 1.581-.814Z"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRewindBackCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackCircleLineDuotoneIcon],svg[solar-rewind-back-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m11 8.071l-3.222 2.302a2 2 0 0 0 0 3.254L11 15.93m5.5-.872V8.943a1 1 0 0 0-1.581-.814l-4.28 3.057a1 1 0 0 0 0 1.628l4.28 3.057a1 1 0 0 0 1.581-.814Z"></svg:path></svg:g>`,
})
export class SolarRewindBackCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackCircleLinearIcon],svg[solar-rewind-back-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12Z"></svg:path><svg:path stroke-linecap="round" d="m11 8.071l-3.222 2.302a2 2 0 0 0 0 3.254L11 15.93m5.5-.872V8.943a1 1 0 0 0-1.581-.814l-4.28 3.057a1 1 0 0 0 0 1.628l4.28 3.057a1 1 0 0 0 1.581-.814Z"></svg:path></svg:g>`,
})
export class SolarRewindBackCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackCircleOutlineIcon],svg[solar-rewind-back-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5m2.483 4.77c1.158-.828 2.767 0 2.767 1.423v6.114c0 1.423-1.609 2.251-2.767 1.424l-4.28-3.057a1.75 1.75 0 0 1 0-2.848zm1.267 1.423a.25.25 0 0 0-.395-.203l-4.28 3.057a.25.25 0 0 0 0 .406l4.28 3.057a.25.25 0 0 0 .395-.203zm-4.14-1.307a.75.75 0 0 1-.174 1.046l-3.222 2.3a1.25 1.25 0 0 0 0 2.035l3.222 2.301a.75.75 0 1 1-.872 1.22l-3.221-2.3a2.75 2.75 0 0 1 0-4.476l3.221-2.3a.75.75 0 0 1 1.046.174" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewindBackCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackLineDuotoneIcon],svg[solar-rewind-back-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m13 8.768l6.097-4.46C20.399 3.411 22 4.58 22 6.426v11.148c0 1.847-1.6 3.015-2.903 2.118L13 15.232" opacity=".5"></svg:path><svg:path d="M2.921 10.147c-1.228.807-1.228 2.899 0 3.706l7.418 4.877c1.194.785 2.661-.237 2.661-1.853V7.123c0-1.616-1.467-2.638-2.661-1.853z"></svg:path></svg:g>`,
})
export class SolarRewindBackLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackLinearIcon],svg[solar-rewind-back-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m13 8.768l6.097-4.46C20.399 3.411 22 4.58 22 6.426v11.148c0 1.847-1.6 3.015-2.903 2.118L13 15.232M2.921 10.147c-1.228.807-1.228 2.899 0 3.706l7.418 4.877c1.194.785 2.661-.237 2.661-1.853V7.123c0-1.616-1.467-2.638-2.661-1.853z"></svg:path>`,
})
export class SolarRewindBackLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackOutlineIcon],svg[solar-rewind-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 6.426c0-1.136-.494-2.127-1.271-2.694c-.797-.581-1.871-.686-2.808-.041l-.009.006L13.75 7.29v-.168c0-1.036-.473-1.933-1.204-2.442c-.746-.52-1.745-.613-2.62-.038L2.51 9.52c-.87.572-1.259 1.562-1.259 2.48s.389 1.908 1.26 2.48l7.417 4.877c.874.575 1.873.482 2.619-.037c.731-.51 1.204-1.407 1.204-2.443v-.167l4.912 3.593l.01.006c.936.645 2.01.54 2.807-.041c.777-.567 1.27-1.557 1.27-2.694zm-9 8.425l5.78 4.228c.363.247.738.215 1.065-.023c.349-.255.655-.772.655-1.482V6.426c0-.71-.306-1.227-.655-1.482c-.327-.238-.701-.27-1.065-.023l-5.78 4.228zm-3-8.954a.79.79 0 0 1 .938.014c.301.21.562.631.562 1.212v9.754c0 .58-.261 1.003-.562 1.212a.79.79 0 0 1-.937.015l-7.418-4.877c-.358-.236-.583-.695-.583-1.227c0-.531.225-.99.583-1.226z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewindBackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardBoldIcon],svg[solar-rewind-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17.574V6.426C2 4.58 3.6 3.411 4.903 4.308L11 8.768V7.123c0-1.616 1.467-2.638 2.661-1.853l7.417 4.877c1.229.807 1.229 2.899 0 3.706l-7.417 4.877c-1.194.785-2.661-.237-2.661-1.853v-1.645l-6.097 4.46C3.601 20.589 2 19.422 2 17.574"></svg:path>`,
})
export class SolarRewindForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardBoldDuotoneIcon],svg[solar-rewind-forward-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232V8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706L13.66 5.27C12.467 4.485 11 5.507 11 7.123"></svg:path>`,
})
export class SolarRewindForwardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardBrokenIcon],svg[solar-rewind-forward-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m11 15.232l-6.097 4.46C3.601 20.589 2 19.422 2 17.574V15m9-6.232l-6.097-4.46C3.601 3.411 2 4.578 2 6.426V11m15.37-3.292L13.66 5.27C12.467 4.485 11 5.507 11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706l-.928-.61"></svg:path>`,
})
export class SolarRewindForwardBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleBoldIcon],svg[solar-rewind-forward-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.436-14.539a.75.75 0 1 0-.872 1.22l3.222 2.302a1.25 1.25 0 0 1 0 2.034l-3.222 2.301a.75.75 0 0 0 .872 1.22l3.221-2.3a2.75 2.75 0 0 0 0-4.476zM7.5 15.131V8.87a1 1 0 0 1 1.555-.832l4.697 3.131a1 1 0 0 1 0 1.664l-4.697 3.132a1 1 0 0 1-1.555-.832" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewindForwardCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleBoldDuotoneIcon],svg[solar-rewind-forward-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.436 7.461a.75.75 0 1 0-.872 1.22l3.222 2.302a1.25 1.25 0 0 1 0 2.034l-3.222 2.301a.75.75 0 0 0 .872 1.22l3.221-2.3a2.75 2.75 0 0 0 0-4.476z"></svg:path><svg:path fill="currentColor" d="M7.5 15.132V8.869a1 1 0 0 1 1.555-.832l4.697 3.131a1 1 0 0 1 0 1.664l-4.697 3.132a1 1 0 0 1-1.555-.832"></svg:path>`,
})
export class SolarRewindForwardCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleBrokenIcon],svg[solar-rewind-forward-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m13 8.071l3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRewindForwardCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleLineDuotoneIcon],svg[solar-rewind-forward-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m13 8.071l3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"></svg:path></svg:g>`,
})
export class SolarRewindForwardCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleLinearIcon],svg[solar-rewind-forward-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" d="m13 8.071l3.221 2.302a2 2 0 0 1 0 3.254L13 15.93m-5.5-.872V8.943a1 1 0 0 1 1.581-.814l4.28 3.057a1 1 0 0 1 0 1.628L9.08 15.87a1 1 0 0 1-1.581-.814Z"></svg:path></svg:g>`,
})
export class SolarRewindForwardCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleOutlineIcon],svg[solar-rewind-forward-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.395-3.26a.25.25 0 0 0-.395.203v6.114c0 .203.23.321.395.203l4.28-3.057a.25.25 0 0 0 0-.406zm-1.895.203c0-1.423 1.609-2.251 2.767-1.424l4.28 3.057a1.75 1.75 0 0 1 0 2.848l-4.28 3.057c-1.158.827-2.767 0-2.767-1.424zm5.64-1.307a.75.75 0 0 1 1.046-.175l3.221 2.301a2.75 2.75 0 0 1 0 4.476l-3.221 2.3a.75.75 0 0 1-.872-1.22l3.222-2.3a1.25 1.25 0 0 0 0-2.035l-3.222-2.301a.75.75 0 0 1-.174-1.046" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewindForwardCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardLineDuotoneIcon],svg[solar-rewind-forward-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m11 8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232" opacity=".5"></svg:path><svg:path d="M21.079 10.147c1.228.807 1.228 2.899 0 3.706L13.66 18.73c-1.194.785-2.661-.237-2.661-1.853V7.123c0-1.616 1.467-2.638 2.661-1.853z"></svg:path></svg:g>`,
})
export class SolarRewindForwardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardLinearIcon],svg[solar-rewind-forward-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m11 8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232"></svg:path><svg:path d="M21.079 10.147c1.228.807 1.228 2.899 0 3.706L13.66 18.73c-1.194.785-2.661-.237-2.661-1.853V7.123c0-1.616 1.467-2.638 2.661-1.853z"></svg:path></svg:g>`,
})
export class SolarRewindForwardLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardOutlineIcon],svg[solar-rewind-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m11 8.768l-6.097-4.46C3.601 3.411 2 4.58 2 6.426v11.148c0 1.847 1.6 3.015 2.903 2.118L11 15.232m0-8.109v9.754c0 1.616 1.467 2.638 2.661 1.853l7.417-4.877c1.229-.807 1.229-2.899 0-3.706L13.661 5.27C12.467 4.485 11 5.507 11 7.123Z"></svg:path>`,
})
export class SolarRewindForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocket2BoldIcon],svg[solar-rocket-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.774 12.481a.76.76 0 0 1 0 1.074l-.156.155a.34.34 0 0 0 0 .48a.34.34 0 0 0 .483 0l1.713-1.71a.76.76 0 0 1 1.072 1.075l-1.712 1.71a1.86 1.86 0 0 1-2.629 0a1.857 1.857 0 0 1 0-2.629l.156-.155a.76.76 0 0 1 1.073 0m4.913 1.009a.76.76 0 0 1 0 1.073l-2.143 2.143a.76.76 0 0 1-1.073-1.074l2.142-2.142a.76.76 0 0 1 1.074 0m2.809 2.805a.76.76 0 0 1 0 1.074l-2.128 2.128a.76.76 0 0 1-1.073-1.074l2.127-2.128a.76.76 0 0 1 1.074 0m-3.199.401c.293.3.288.78-.012 1.073l-1.73 1.692a.759.759 0 0 1-1.061-1.085l1.73-1.692a.76.76 0 0 1 1.073.012m4.184 1.422a.76.76 0 0 1 0 1.074l-1.713 1.71a.34.34 0 0 0 0 .48c.134.133.35.133.484 0l.156-.155A.759.759 0 0 1 11.48 22.3l-.155.155a1.86 1.86 0 0 1-2.63 0a1.857 1.857 0 0 1 0-2.629l1.713-1.71a.76.76 0 0 1 1.073.001" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.846 5.41L8.66 7.59c-.402.401-.771.769-1.063 1.101a5 5 0 0 0-.532.706l-.021-.022l-.081-.08a4.2 4.2 0 0 0-1.318-.864l-.106-.043l-.326-.129a.658.658 0 0 1-.223-1.077c.963-.961 2.12-2.114 2.679-2.346a2.9 2.9 0 0 1 1.537-.197c.47.07.915.311 1.641.77m3.735 11.484c.176.18.293.305.399.44q.21.268.373.567c.123.223.218.462.408.939c.155.388.67.491.969.193l.072-.072c.963-.96 2.12-2.114 2.353-2.671c.205-.49.273-1.021.197-1.533c-.07-.468-.312-.912-.772-1.636l-2.195 2.189c-.411.41-.788.786-1.13 1.08a5 5 0 0 1-.674.504"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m15.502 14.367l5.03-5.014c.724-.722 1.087-1.083 1.277-1.543C22 7.351 22 6.84 22 5.82v-.49c0-1.57 0-2.355-.49-2.843C21.022 2 20.235 2 18.659 2h-.489c-1.024 0-1.537 0-1.997.19s-.823.551-1.547 1.274l-5.03 5.014c-.846.844-1.371 1.367-1.574 1.873c-.064.16-.097.317-.097.483c0 .69.557 1.245 1.671 2.356l.15.149l1.754-1.78a.645.645 0 0 1 .919.906l-1.76 1.785l.119.117c1.114 1.11 1.67 1.666 2.362 1.666q.228 0 .447-.081c.519-.191 1.048-.72 1.916-1.585m2.363-5.888c-.652.65-1.71.65-2.363 0a1.66 1.66 0 0 1 0-2.356c.653-.65 1.71-.65 2.363 0s.653 1.705 0 2.356" clip-rule="evenodd"></svg:path>`,
})
export class SolarRocket2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocket2BoldDuotoneIcon],svg[solar-rocket-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.502 14.367l5.03-5.014c.724-.722 1.087-1.083 1.277-1.543C22 7.351 22 6.84 22 5.82v-.49c0-1.57 0-2.355-.49-2.843C21.022 2 20.235 2 18.659 2h-.489c-1.024 0-1.537 0-1.997.19s-.823.551-1.547 1.274l-5.03 5.014c-.846.844-1.371 1.367-1.574 1.873c-.064.16-.097.317-.097.483c0 .69.557 1.245 1.671 2.356l.15.149l1.754-1.78a.645.645 0 0 1 .919.906l-1.76 1.785l.119.117c1.114 1.11 1.67 1.666 2.362 1.666q.228 0 .447-.081c.519-.191 1.048-.72 1.916-1.585m2.363-5.888c-.652.65-1.71.65-2.363 0a1.66 1.66 0 0 1 0-2.356c.653-.65 1.71-.65 2.363 0s.653 1.705 0 2.356M2.774 12.481a.76.76 0 0 1 0 1.074l-.156.155a.34.34 0 0 0 0 .48a.34.34 0 0 0 .483 0l1.713-1.71a.76.76 0 0 1 1.072 1.075l-1.712 1.71a1.86 1.86 0 0 1-2.629 0a1.857 1.857 0 0 1 0-2.629l.156-.155a.76.76 0 0 1 1.073 0m4.523 4.215c.293.3.288.78-.012 1.073l-1.73 1.692a.759.759 0 0 1-1.061-1.085l1.73-1.692a.76.76 0 0 1 1.073.012m4.184 1.422a.76.76 0 0 1 0 1.074l-1.713 1.71a.34.34 0 0 0 0 .48c.134.133.35.133.484 0l.156-.155A.759.759 0 0 1 11.48 22.3l-.155.155a1.86 1.86 0 0 1-2.63 0a1.857 1.857 0 0 1 0-2.629l1.713-1.71a.76.76 0 0 1 1.073.001" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.846 5.41L8.658 7.59c-.402.401-.77.769-1.062 1.101a5 5 0 0 0-.532.706l-.022-.021l-.08-.08a4.2 4.2 0 0 0-1.319-.865l-.106-.042l-.325-.13a.658.658 0 0 1-.223-1.077c.963-.96 2.12-2.114 2.679-2.346a2.9 2.9 0 0 1 1.537-.197c.47.07.915.311 1.641.77m3.736 11.484c.176.18.293.306.399.44q.21.268.373.567c.123.223.218.462.408.939c.155.388.67.491.968.193l.073-.072c.963-.96 2.12-2.114 2.353-2.67a2.9 2.9 0 0 0 .197-1.534c-.07-.468-.312-.912-.772-1.636l-2.195 2.189c-.411.41-.789.786-1.13 1.08a5 5 0 0 1-.674.504m-6.896-2.33a.759.759 0 1 0-1.073-1.073L4.47 15.632a.759.759 0 1 0 1.074 1.074zm2.809 2.806a.759.759 0 1 0-1.073-1.073l-2.128 2.127a.76.76 0 0 0 1.074 1.074z" opacity=".5"></svg:path>`,
})
export class SolarRocket2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocket2BrokenIcon],svg[solar-rocket-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.078 13.417a.75.75 0 0 0-1.06-1.06zm-2.222 1.16l-.53-.531zM2.32 13.04l-.53-.53zm.683.377a.75.75 0 0 0-1.06-1.06zm8.604 5.57a.75.75 0 1 0-1.06-1.061zm-2.222 1.159l.53.53zm1.538 1.536l.53.53zm.684.377a.75.75 0 1 0-1.06-1.061zm-.973-4.873a.75.75 0 0 0-1.06-1.06zM7.47 18.228a.75.75 0 0 0 1.06 1.06zm.387-3.814a.75.75 0 1 0-1.06-1.061zM4.68 15.47a.75.75 0 1 0 1.061 1.06zm2.781 2.112a.75.75 0 0 0-1.048-1.073zm-2.758.6a.75.75 0 1 0 1.049 1.072zm.316-5.826l-1.692 1.69l1.06 1.061l1.692-1.69zm-2.17 1.215l.154-.154l-1.06-1.06l-.153.153zm0 .475a.335.335 0 0 1 0-.475l-1.06-1.061a1.835 1.835 0 0 0 0 2.597zm.478 0a.34.34 0 0 1-.477 0l-1.06 1.061c.717.717 1.88.717 2.597 0zm7.22 3.88l-1.692 1.69l1.06 1.06l1.692-1.689zm.906 4.287l.154-.154l-1.06-1.061l-.154.153zm-2.598 0a1.84 1.84 0 0 0 2.598 0l-1.06-1.062a.34.34 0 0 1-.478 0zm0-2.598a1.835 1.835 0 0 0 0 2.598l1.06-1.062a.335.335 0 0 1 0-.474zm.718-3.49L7.47 18.228l1.06 1.06l2.103-2.102zm-2.776-2.772L4.68 15.47l1.061 1.06l2.117-2.116zm-.384 3.156l-1.71 1.672l1.049 1.073l1.71-1.672zm3.33-3.452l.53-.532zm0-4.656l-.53-.531zm5.837 5.82l.53.53zm-4.67 0l-.53.53zm9.64-4.956l-.53-.53zm-4.595-7.77a.75.75 0 0 0 .573 1.386zM9.797 13.107a.75.75 0 0 0 1.06 1.063zm2.81-.683a.75.75 0 1 0-1.059-1.062zm1.08 3.362l.258.704zm-5.5-5.535l-.696-.28zm6.268-5.488a.75.75 0 1 0-1.06-1.063zm5.565 3.971l-4.97 4.955l1.06 1.063l4.969-4.955zm-8.58 4.955l-1.167-1.164l-1.06 1.063l1.168 1.164zM18.215 2.75h.483v-1.5h-.483zm3.035 2.542v.482h1.5v-.482zM18.698 2.75c.8 0 1.324.002 1.712.054c.367.049.498.13.577.21l1.06-1.063c-.405-.403-.905-.563-1.438-.634c-.51-.069-1.154-.067-1.91-.067zm4.052 2.542c0-.755.002-1.396-.067-1.906c-.072-.532-.232-1.032-.637-1.435l-1.059 1.062c.079.079.16.208.21.573c.052.387.053.909.053 1.706zm-12.477 7.233c-.566-.563-.935-.934-1.173-1.244c-.224-.293-.258-.442-.258-.552h-1.5c0 .571.241 1.038.567 1.464c.313.409.77.861 1.304 1.395zm.108 2.226c.535.534.989.989 1.399 1.3c.427.326.894.565 1.465.565v-1.5c-.113 0-.263-.035-.557-.258c-.311-.237-.683-.605-1.248-1.169zm10.698-4.954c.672-.67 1.166-1.144 1.425-1.768l-1.385-.575c-.118.283-.34.523-1.099 1.28zm.171-4.023c0 1.07-.013 1.396-.131 1.68l1.385.575c.26-.624.246-1.307.246-2.255zM18.215 1.25c-.951 0-1.635-.013-2.26.245l.573 1.386c.285-.118.614-.131 1.687-.131zm-7.359 12.92l1.751-1.746l-1.059-1.062l-1.75 1.745zm4.194-.48c-.436.434-.76.756-1.037.995c-.278.24-.456.35-.586.397l.518 1.408c.383-.141.723-.388 1.049-.67c.327-.282.694-.648 1.115-1.069zm-1.623 1.392a.5.5 0 0 1-.182.034v1.5q.365-.001.7-.126zM9.213 7.87c-.411.41-.77.768-1.05 1.087c-.279.318-.524.648-.672 1.015l1.392.56c.053-.133.168-.312.408-.586s.557-.59.982-1.014zM7.491 9.972c-.096.24-.149.49-.149.757h1.5a.5.5 0 0 1 .041-.198zm2.782-1.04l4.182-4.17l-1.06-1.062l-4.182 4.17z"></svg:path><svg:path fill="currentColor" d="m8.037 10.102l.53-.53V9.57zm3.634-3.398a.75.75 0 1 0 .812-1.262zm-.13-.975l.407-.631zM9.359 4.608l.11-.742zM5.19 7.12l.53.531zm2.65-2.318l.287.693zm-2.105 3.51l-.277.698zm-.181.736a.75.75 0 1 0 .571-1.387zm-.141-.863l.276-.697zm2.245 2.597a.75.75 0 0 0 1.06-1.06zm.502-1.618a.75.75 0 0 0-1.06 1.062zm4.324-3.722l-.535-.344l-.812 1.261l.535.345zm-.535-.344c-.527-.34-.958-.617-1.33-.817c-.38-.205-.745-.355-1.15-.415l-.22 1.484c.169.025.36.09.66.251c.308.167.682.407 1.228.758zM5.72 7.651c.479-.477.99-.987 1.45-1.406c.229-.21.436-.388.613-.524c.188-.145.299-.208.342-.226L7.55 4.109a3.2 3.2 0 0 0-.683.424c-.223.172-.464.38-.708.604c-.489.445-1.025.98-1.498 1.452zm3.746-3.785a3.6 3.6 0 0 0-1.916.243l.575 1.386c.365-.152.753-.2 1.122-.145zm-4.33 5.016l.321.128l.553-1.395l-.322-.127zm.321.128l.096.038l.571-1.387l-.114-.046zm-.795-2.421a1.4 1.4 0 0 0 .474 2.293l.552-1.394a.1.1 0 0 1 .033.163zm2.845 4.043l.15.15l1.06-1.06l-.15-.15zm-.408-.406l.409.407L8.567 9.57l-.408-.407zm6.826 5.799l-.53.53l.035.034zm4.62-4.54a.75.75 0 0 0-1.26.816zm-.285.942l-.63.407zm1.124 2.177l.742-.11zm-2.52 4.154l-.53-.53zm2.325-2.639l-.692-.289zm-2.656 2.242a.75.75 0 1 0-1.393.555zm-2.658-1.382a.75.75 0 1 0 .989-1.128zm2.918 1.85l.53.531zm-2.577-3.573a.75.75 0 0 0-1.06 1.06zm3.07-2.955l.344.533l1.26-.815l-.346-.533zm-.951 5.926l-.072.071l1.06 1.063l.071-.072zm1.295-5.393c.353.545.594.918.76 1.225c.162.298.227.489.252.656l1.484-.22c-.06-.407-.21-.77-.417-1.15c-.2-.371-.48-.8-.82-1.326zm-.236 6.455a48 48 0 0 0 1.456-1.493c.224-.244.434-.484.606-.706c.163-.21.328-.45.425-.682l-1.384-.578a2 2 0 0 1-.227.34a10 10 0 0 1-.525.612c-.42.457-.931.968-1.41 1.445zm1.248-4.574c.055.366.007.752-.145 1.115l1.384.578c.254-.608.34-1.27.245-1.914zm-3.778 1.136l-.445-.39l-.989 1.128l.445.39zm1.4 2.447a.16.16 0 0 1 .144-.045a.18.18 0 0 1 .125.108l-1.393.555c.356.895 1.515 1.11 2.183.444zm-1.81-2.803l-.238-.24l-1.06 1.061l.238.24zm.596-6.081a.75.75 0 0 0 1.059-1.062zm2.335-1.062a.75.75 0 0 0 1.059 1.062zm1.059-2.328a2.404 2.404 0 0 0-3.394 0l1.059 1.062a.904.904 0 0 1 1.276 0zm-3.394 0a2.393 2.393 0 0 0 0 3.39l1.059-1.062a.893.893 0 0 1 0-1.266zm3.394 3.39a2.39 2.39 0 0 0 0-3.39l-1.06 1.062a.893.893 0 0 1 0 1.266z"></svg:path>`,
})
export class SolarRocket2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocket2LineDuotoneIcon],svg[solar-rocket-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M22 5.365h.75zM9.455 13.303l.529-.532zm0-4.76l.529.532zm5.974 5.95l-.53-.532zm-4.78 0l-.529.531zm9.866-5.066l.53.532zM22 5.858h-.75zm-7.459-2.38l-.529-.531zm-1.05 12.615l-.26-.704zm-5.629-5.658l.696.28zm12.124-1.54L14.9 13.962l1.059 1.063l5.087-5.065zm-8.807 5.066l-1.195-1.19l-1.059 1.063l1.195 1.19zM9.984 9.075L15.07 4.01l-1.058-1.063l-5.087 5.065zm8.142-6.325h.495v-1.5h-.495zm3.124 2.615v.493h1.5v-.493zM18.62 2.75c.818 0 1.356.002 1.755.055c.378.05.516.135.601.22l1.058-1.064c-.41-.408-.917-.57-1.46-.643c-.521-.07-1.178-.068-1.953-.068zm4.13 2.615c0-.772.002-1.426-.069-1.946c-.073-.542-.236-1.049-.647-1.458l-1.058 1.063c.084.084.168.22.219.595c.053.397.055.932.055 1.746zM9.984 12.771c-.578-.575-.958-.955-1.201-1.273c-.231-.301-.268-.457-.268-.575h-1.5c0 .58.244 1.053.577 1.487c.32.417.785.878 1.333 1.424zm.136 2.253c.548.546 1.012 1.01 1.43 1.328c.436.331.91.573 1.489.573v-1.5c-.121 0-.279-.038-.581-.268c-.32-.242-.701-.62-1.28-1.196zM21.045 9.96c.689-.686 1.19-1.168 1.455-1.802l-1.385-.576c-.122.294-.353.542-1.129 1.315zm.205-4.101c0 1.093-.013 1.43-.135 1.723l1.385.576c.263-.634.25-1.329.25-2.299zM15.07 4.01c.776-.773 1.026-1.002 1.322-1.125L15.82 1.5c-.636.262-1.119.762-1.808 1.448zm3.056-2.76c-.975 0-1.67-.013-2.306.249l.572 1.386c.296-.122.637-.135 1.734-.135zm-3.227 12.711c-.445.444-.777.774-1.062 1.02s-.47.358-.605.408l.517 1.408c.389-.143.735-.394 1.068-.68c.334-.29.709-.663 1.14-1.093zm-1.667 1.428a.5.5 0 0 1-.193.036v1.5q.37-.001.71-.128zM8.925 8.012c-.421.42-.788.785-1.074 1.111c-.285.324-.534.66-.684 1.032l1.391.56c.056-.138.174-.322.42-.603c.245-.279.571-.604 1.006-1.037zm-1.758 2.143a2 2 0 0 0-.152.768h1.5c0-.065.011-.13.043-.208z"></svg:path><svg:path fill="currentColor" d="m7.709 10.283l.53-.531V9.75zm3.729-3.488a.75.75 0 1 0 .81-1.262zm-.142-.983l-.406.63zM9.06 4.666l.11-.742zM4.796 7.234l.53.532zm2.71-2.37l.286.694zM5.35 8.455l.276-.698zm.107.042l-.285.694zm1.415.954l.53-.531zm-.082-.08l-.522.538zM5.02 8.324l-.275.697zm8.714 8.015l-.53.53l.036.034zm4.713-4.632a.75.75 0 0 0-1.258.816zm-.276.954l-.629.408zm1.151 2.226l.742-.11zm-2.579 4.246l.53.531zm2.38-2.698l.692.29zm-3.432 2.576l.696-.279zm-.413-.95l-.657.362zm-1.09-1.324l.53-.531l-.017-.017l-.018-.016zm.713.753l.59-.463zm1.769 1.716l-.53-.532zm-2.65-3.642a.75.75 0 1 0-1.06 1.061zm-6.689-4.597a.75.75 0 0 0 1.06-1.061zm4.917-5.433L11.7 5.18l-.81 1.262l.547.352zM11.7 5.18c-.539-.347-.979-.63-1.359-.835c-.389-.209-.76-.36-1.172-.422l-.22 1.484c.176.026.374.094.681.26c.317.17.7.416 1.26.775zM5.325 7.766c.49-.488 1.014-1.01 1.484-1.438c.235-.214.448-.397.63-.537c.192-.148.307-.214.353-.234l-.574-1.385a3.3 3.3 0 0 0-.695.43c-.227.176-.474.39-.724.617a49 49 0 0 0-1.532 1.484zM9.17 3.924a3.7 3.7 0 0 0-1.952.248l.574 1.386a2.2 2.2 0 0 1 1.159-.15zM4.746 9.02l.329.13l.552-1.394l-.33-.13zm1.598.962l.836.832L8.238 9.75l-.836-.832zM5.075 9.15l.098.039l.57-1.388l-.116-.046zm2.327-.232l-.089-.088l-1.044 1.077l.075.074zm-2.23.27c.409.169.781.412 1.097.719L7.313 8.83a5 5 0 0 0-1.57-1.029zm-.905-2.486a1.414 1.414 0 0 0 .479 2.317l.552-1.395a.086.086 0 0 1 .027.14zm12.923 5.82l.353.545l1.259-.816l-.354-.546zm-.975 6.078l-.073.072l1.058 1.063l.073-.073zm1.328-5.533c.36.556.608.938.779 1.253c.166.305.233.502.26.675l1.483-.22c-.062-.413-.215-.783-.425-1.17c-.205-.38-.49-.817-.838-1.354zm-.27 6.595a49 49 0 0 0 1.49-1.526c.23-.249.443-.494.62-.72c.166-.216.334-.458.433-.694l-1.384-.578c-.02.045-.085.16-.235.351c-.14.18-.323.393-.538.627a48 48 0 0 1-1.444 1.477zm1.308-4.667c.056.377.007.775-.15 1.149l1.385.578a3.66 3.66 0 0 0 .249-1.948zm-3.897 1.176l-.455-.398l-.988 1.128l.455.398zm1.704 2.56c-.186-.466-.3-.757-.452-1.032l-1.314.722c.097.176.174.367.373.866zm-2.727-1.464c.38.379.526.526.65.684l1.18-.926c-.193-.247-.416-.467-.772-.821zm2.276.432a5 5 0 0 0-.445-.674l-1.18.926q.175.222.31.47zm.205.973a.15.15 0 0 1 .131-.041c.038.007.09.038.115.1l-1.393.556c.36.904 1.53 1.12 2.205.448zm-1.877-2.866l-.245-.244l-1.06 1.061l.245.245zm-7.086-4.994l.153.153l1.06-1.061l-.153-.153z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m5.548 13l-1.692 1.69a1.09 1.09 0 0 1-1.537 0a1.085 1.085 0 0 1 0-1.536L2.472 13m8.604 5.57l-1.692 1.69a1.085 1.085 0 0 0 0 1.535a1.09 1.09 0 0 0 1.538 0l.154-.153m-4.14-4.483l-1.71 1.672"></svg:path><svg:path fill="currentColor" d="M10.633 17.186a.75.75 0 0 0-1.06-1.061zM7.47 18.227a.75.75 0 0 0 1.06 1.06zm.387-3.814a.75.75 0 1 0-1.06-1.06zM4.68 15.47a.75.75 0 1 0 1.06 1.061zm4.892.656L7.47 18.227l1.06 1.06l2.103-2.101zm-2.775-2.773L4.68 15.47l1.06 1.061l2.117-2.117zm5.576-.708a.75.75 0 1 0-1.058-1.063zm-1.792 1.785l1.792-1.785l-1.058-1.063l-1.792 1.785zm6.708-6.417a.945.945 0 0 1-1.331 0l-1.059 1.063a2.445 2.445 0 0 0 3.448 0zm-1.331 0a.93.93 0 0 1 0-1.317l-1.059-1.063a2.43 2.43 0 0 0 0 3.443zm0-1.317a.945.945 0 0 1 1.33 0l1.06-1.063a2.445 2.445 0 0 0-3.449 0zm1.33 0a.93.93 0 0 1 0 1.317l1.06 1.063a2.43 2.43 0 0 0 0-3.443z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarRocket2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocket2LinearIcon],svg[solar-rocket-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.365h.75zM9.455 13.303l.529-.532zm0-4.76l.529.532zm5.974 5.95l-.53-.532zm-4.78 0l-.529.531zm9.866-5.066l.53.532zM22 5.858h-.75zm-7.459-2.38l-.529-.531zm-2.168 9.167a.75.75 0 1 0-1.058-1.063zM7.71 10.282l.53-.53V9.75zm3.729-3.488a.75.75 0 1 0 .81-1.262zm-.142-.983l-.406.631zM9.06 4.666l.11-.742zM4.796 7.234l.53.531zm2.71-2.37l.287.693zM5.35 8.453l.276-.698zm.107.043l-.285.693zm1.415.954l.53-.532zm-.082-.081l-.522.538zM5.02 8.322l-.275.698zm8.714 8.015l-.53.531l.036.034zm4.713-4.631a.75.75 0 1 0-1.258.816zm-.276.953l-.629.408zm1.151 2.226l.742-.11zm-2.579 4.246l.53.532zm2.38-2.698l.692.29zm-3.432 2.576l.696-.278zm-.413-.949l-.657.361zm-1.089-1.324l.53-.532l-.018-.017l-.018-.015zm.712.753l.59-.463zm1.769 1.715l-.53-.531zm-3.18-3.11l-.26-.705zm-5.629-5.659l.696.28zm-1.784 2.982a.75.75 0 0 0-1.06-1.061zm-2.222 1.16l-.53-.531zM2.32 13.04l-.53-.53zm.683.377a.75.75 0 0 0-1.06-1.061zm8.604 5.57a.75.75 0 1 0-1.06-1.061zm-2.222 1.159l.53.53zm1.538 1.536l.53.53zm.684.377a.75.75 0 1 0-1.06-1.061zm-.973-4.873a.75.75 0 0 0-1.06-1.06zM7.47 18.227a.75.75 0 0 0 1.06 1.061zm.387-3.814a.75.75 0 1 0-1.06-1.06zM4.68 15.47a.75.75 0 1 0 1.061 1.06zm2.78 2.11a.75.75 0 1 0-1.048-1.072zm-2.758.6a.75.75 0 1 0 1.049 1.072zm15.284-9.285L14.9 13.96l1.059 1.063l5.086-5.065zm-8.808 5.065l-1.194-1.19l-1.059 1.063l1.195 1.19zM9.985 9.075L15.07 4.01l-1.058-1.063l-5.087 5.065zm8.142-6.325h.495v-1.5h-.495zm3.124 2.615v.493h1.5v-.493zM18.62 2.75c.818 0 1.356.002 1.755.055c.378.05.516.135.6.22l1.06-1.064c-.41-.408-.918-.57-1.46-.643c-.522-.07-1.179-.068-1.954-.068zm4.13 2.615c0-.772.002-1.426-.069-1.946c-.073-.542-.236-1.049-.647-1.458l-1.058 1.063c.084.084.168.22.219.595c.053.397.055.932.055 1.746zM9.984 12.771c-.579-.575-.958-.955-1.201-1.273c-.231-.301-.268-.457-.268-.575h-1.5c0 .58.244 1.053.577 1.487c.32.417.785.878 1.333 1.424zm.136 2.253c.548.546 1.012 1.01 1.43 1.328c.436.331.91.573 1.489.573v-1.5c-.121 0-.279-.038-.581-.268c-.32-.242-.701-.62-1.28-1.196zM21.045 9.96c.688-.686 1.19-1.168 1.454-1.802l-1.384-.576c-.123.294-.353.542-1.129 1.315zm.205-4.101c0 1.093-.013 1.43-.135 1.723l1.385.576c.263-.634.25-1.329.25-2.299zM15.07 4.01c.776-.773 1.026-1.002 1.322-1.125L15.82 1.5c-.636.262-1.119.762-1.808 1.448zm3.056-2.76c-.975 0-1.671-.013-2.306.249l.572 1.386c.296-.122.637-.135 1.734-.135zM10.58 14.43l1.792-1.785l-1.058-1.063l-1.792 1.784zm1.668-8.898l-.548-.351l-.81 1.261l.547.352zm-.548-.351c-.539-.347-.979-.63-1.359-.835c-.389-.21-.76-.361-1.172-.422l-.22 1.484c.176.026.374.094.681.259c.317.17.7.416 1.26.775zM5.325 7.765c.49-.488 1.014-1.01 1.485-1.438c.234-.214.447-.396.628-.536c.193-.148.308-.215.355-.234l-.575-1.386a3.3 3.3 0 0 0-.695.431a12 12 0 0 0-.724.616c-.5.456-1.048 1.002-1.532 1.484zM9.17 3.924a3.7 3.7 0 0 0-1.952.247l.575 1.386a2.2 2.2 0 0 1 1.158-.15zM4.746 9.02l.33.13l.551-1.395l-.33-.13zm1.598.961l.836.832l1.058-1.062l-.836-.833zm-1.269-.83l.098.038l.57-1.387l-.116-.047zm2.327-.233l-.089-.088L6.27 9.907l.075.074zm-2.23.271c.409.168.781.412 1.097.718L7.313 8.83a5 5 0 0 0-1.57-1.028zm-.905-2.487a1.414 1.414 0 0 0 .479 2.318l.552-1.395a.086.086 0 0 1 .027.14zm12.923 5.82l.353.545l1.259-.816l-.354-.545zm-.975 6.078l-.073.073l1.058 1.063l.073-.073zm1.328-5.533c.36.556.608.938.779 1.253c.166.306.233.502.26.676l1.483-.221c-.062-.413-.215-.783-.425-1.17c-.205-.379-.49-.817-.838-1.354zm-.27 6.596a50 50 0 0 0 1.49-1.526c.23-.249.443-.495.62-.721c.166-.215.334-.457.433-.693l-1.384-.579c-.02.046-.085.16-.235.352c-.14.18-.323.392-.538.626c-.43.468-.954.99-1.444 1.478zm1.308-4.667a2.15 2.15 0 0 1-.15 1.148l1.385.579a3.66 3.66 0 0 0 .249-1.948zm-3.897 1.176l-.455-.399l-.988 1.129l.455.398zm1.704 2.56c-.186-.467-.3-.758-.451-1.033l-1.315.722c.097.177.174.368.373.866zm-2.727-1.465c.38.38.526.526.65.685l1.18-.926c-.193-.247-.416-.467-.772-.822zm2.276.432a5 5 0 0 0-.445-.673l-1.18.926q.175.222.31.47zm1.352-9.687a.945.945 0 0 1-1.331 0l-1.059 1.063a2.445 2.445 0 0 0 3.448 0zm-1.331 0a.93.93 0 0 1 0-1.316l-1.059-1.063a2.43 2.43 0 0 0 0 3.442zm0-1.316a.945.945 0 0 1 1.331 0l1.058-1.063a2.445 2.445 0 0 0-3.448 0zm1.331 0a.93.93 0 0 1 0 1.316l1.058 1.063a2.43 2.43 0 0 0 0-3.442zm-1.147 11.977a.15.15 0 0 1 .131-.042c.038.008.09.039.115.1l-1.393.556c.361.904 1.53 1.12 2.205.449zm-1.243-4.712c-.445.444-.777.774-1.062 1.02s-.47.358-.605.408l.517 1.408c.389-.143.735-.394 1.068-.68c.334-.29.709-.663 1.14-1.093zm-1.667 1.428a.5.5 0 0 1-.193.036v1.5q.37-.001.71-.128zm1.033.418l-.245-.245l-1.06 1.062l.245.244zm-5.34-7.795c-.421.42-.789.785-1.074 1.111c-.285.324-.535.66-.684 1.032l1.391.56c.056-.138.174-.322.42-.603c.245-.279.571-.604 1.006-1.037zm-1.759 2.143a2 2 0 0 0-.151.768h1.5c0-.065.011-.13.043-.208zm.013.658l.153.153l1.06-1.061l-.153-.154zm-2.16 1.543l-1.693 1.69l1.06 1.06l1.692-1.689zm-2.17 1.215l.153-.154l-1.06-1.061l-.153.153zm0 .475a.335.335 0 0 1 0-.475l-1.06-1.062a1.835 1.835 0 0 0 0 2.598zm.477 0a.34.34 0 0 1-.477 0l-1.06 1.06c.717.717 1.88.717 2.597 0zm7.22 3.88l-1.692 1.69l1.06 1.06l1.692-1.69zm.906 4.287l.154-.154l-1.06-1.061l-.154.153zm-2.598 0a1.84 1.84 0 0 0 2.598 0l-1.06-1.062a.34.34 0 0 1-.478 0zm0-2.598a1.835 1.835 0 0 0 0 2.598l1.06-1.062a.335.335 0 0 1 0-.475zm.718-3.49L7.47 18.227l1.06 1.061l2.103-2.102zm-2.776-2.772L4.68 15.47l1.061 1.06l2.117-2.117zm-.384 3.156l-1.71 1.672l1.049 1.072l1.71-1.672z"></svg:path>`,
})
export class SolarRocket2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocket2OutlineIcon],svg[solar-rocket-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.003 12.357a.75.75 0 0 1 0 1.06l-.154.154a.335.335 0 0 0 0 .475a.34.34 0 0 0 .477 0l1.692-1.69a.75.75 0 1 1 1.06 1.061l-1.692 1.69a1.84 1.84 0 0 1-2.597 0a1.835 1.835 0 0 1 0-2.597l.153-.154a.75.75 0 0 1 1.061 0m4.854.997a.75.75 0 0 1 0 1.06L5.74 16.53a.75.75 0 0 1-1.06-1.06l2.116-2.117a.75.75 0 0 1 1.061 0m2.776 2.772a.75.75 0 0 1 0 1.06L8.53 19.289a.75.75 0 1 1-1.06-1.06l2.102-2.103a.75.75 0 0 1 1.06 0m-3.16.395a.75.75 0 0 1-.012 1.06l-1.71 1.673a.75.75 0 0 1-1.048-1.073l1.71-1.672a.75.75 0 0 1 1.06.012m4.134 1.405a.75.75 0 0 1 0 1.06l-1.692 1.69a.335.335 0 0 0 0 .475a.34.34 0 0 0 .478 0l.154-.153a.75.75 0 1 1 1.06 1.061l-.154.154a1.84 1.84 0 0 1-2.598 0a1.835 1.835 0 0 1 0-2.598l1.692-1.69a.75.75 0 0 1 1.06.001"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.992 1.25h.679c.753 0 1.393 0 1.903.068c.543.073 1.05.235 1.46.643c.41.41.574.916.647 1.458c.07.508.069 1.146.069 1.896v.677c0 .901.001 1.56-.25 2.165c-.252.605-.72 1.07-1.36 1.707l-.096.095l-2.265 2.256l.039.06c.34.527.62.957.822 1.33c.21.387.363.757.425 1.17a3.64 3.64 0 0 1-.25 1.948a3.2 3.2 0 0 1-.433.693c-.176.226-.39.472-.619.721c-.455.495-1 1.038-1.483 1.52l-.007.006l-.073.073c-.674.671-1.844.455-2.205-.449c-.199-.498-.276-.69-.373-.865a3.5 3.5 0 0 0-.31-.47c-.123-.156-.266-.301-.634-.668l-.423-.37a2 2 0 0 1-.216.011c-.579 0-1.053-.242-1.489-.573c-.41-.311-.862-.762-1.394-1.292l-1.267-1.261c-.532-.53-.985-.981-1.297-1.389c-.333-.434-.577-.907-.577-1.487q0-.13.016-.257l-.687-.685l-.075-.074a3.5 3.5 0 0 0-1.194-.757l-.33-.13a1.414 1.414 0 0 1-.478-2.318l.007-.006a50 50 0 0 1 1.525-1.477c.25-.228.497-.441.724-.616c.216-.167.46-.334.695-.432a3.7 3.7 0 0 1 1.952-.247c.413.06.783.213 1.172.422c.374.201.807.48 1.335.819l.066.042l2.269-2.26l.095-.094c.64-.638 1.107-1.104 1.713-1.354s1.266-.25 2.172-.249m-.3 12.047c.281.435.483.754.63 1.023c.166.306.233.502.26.676c.055.377.006.775-.15 1.149c-.02.045-.085.159-.235.351c-.14.18-.323.392-.538.626c-.405.44-.893.929-1.357 1.392a7 7 0 0 0-.365-.815a5 5 0 0 0-.445-.673c-.188-.24-.403-.453-.74-.788l-.036-.036l.101-.086c.33-.284.699-.652 1.124-1.075zm.434-10.547c-1.097 0-1.438.013-1.734.136c-.296.122-.546.352-1.322 1.124L9.984 9.075c-.435.433-.76.758-1.006 1.037c-.246.281-.364.465-.42.603a.5.5 0 0 0-.043.208c0 .118.037.274.268.575c.243.318.622.698 1.2 1.274l.069.067l1.263-1.257a.75.75 0 0 1 1.058 1.063l-1.258 1.253l.063.063c.579.576.96.954 1.28 1.197c.302.23.46.267.58.267c.063 0 .123-.01.194-.036c.136-.05.32-.162.605-.409c.285-.245.617-.575 1.062-1.019l5.087-5.065c.776-.773 1.006-1.02 1.129-1.315c.122-.293.135-.63.135-1.723v-.493c0-.814-.002-1.35-.055-1.746c-.05-.374-.135-.51-.22-.595s-.222-.168-.6-.219c-.399-.053-.937-.055-1.754-.055zm.221 2.883a2.445 2.445 0 0 0-3.448 0a2.43 2.43 0 0 0 0 3.442a2.445 2.445 0 0 0 3.448 0a2.43 2.43 0 0 0 0-3.442m-2.39 1.063a.945.945 0 0 1 1.332 0a.93.93 0 0 1 0 1.316a.945.945 0 0 1-1.331 0a.93.93 0 0 1 0-1.316m-5.303-.405a17 17 0 0 0-1.023-.624c-.307-.165-.505-.233-.68-.26a2.2 2.2 0 0 0-1.158.15c-.047.02-.162.086-.355.234c-.18.14-.394.322-.628.536c-.441.402-.929.885-1.392 1.346l.209.082l.005.002l.112.045c.583.24 1.116.59 1.57 1.028l.085.085l.34.339l.112-.13c.282-.322.643-.683 1.058-1.096z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRocket2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocketBoldIcon],svg[solar-rocket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.034 5.963L6.491 8.5c-.467.466-.896.893-1.235 1.28a6 6 0 0 0-.619.82l-.024-.025l-.095-.094a4.9 4.9 0 0 0-1.532-1.004l-.123-.05l-.379-.15a.764.764 0 0 1-.259-1.252C3.345 6.907 4.69 5.566 5.34 5.297a3.4 3.4 0 0 1 1.788-.229c.546.081 1.063.362 1.907.895m4.342 13.35c.205.208.34.355.464.512q.243.311.434.658c.142.26.253.537.474 1.092a.69.69 0 0 0 1.126.224l.084-.083c1.12-1.117 2.465-2.458 2.735-3.105a3.35 3.35 0 0 0 .229-1.782c-.081-.545-.362-1.06-.897-1.902l-2.552 2.544c-.478.477-.916.914-1.313 1.256c-.237.206-.497.41-.784.586"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m14.447 16.377l5.847-5.83c.842-.839 1.263-1.259 1.484-1.792S22 7.627 22 6.44v-.567c0-1.826 0-2.739-.569-3.306S19.947 2 18.116 2h-.57c-1.19 0-1.785 0-2.32.221c-.536.221-.957.641-1.8 1.48L7.58 9.531c-.984.98-1.594 1.589-1.83 2.176a1.5 1.5 0 0 0-.112.562c0 .802.647 1.448 1.942 2.739l.174.173l2.038-2.069a.75.75 0 1 1 1.069 1.053L8.816 16.24l.137.137c1.295 1.29 1.943 1.936 2.747 1.936c.178 0 .348-.031.519-.094c.603-.222 1.219-.836 2.228-1.842m2.747-6.846a1.946 1.946 0 0 1-2.747 0a1.93 1.93 0 0 1 0-2.738a1.946 1.946 0 0 1 2.747 0a1.93 1.93 0 0 1 0 2.738" clip-rule="evenodd"></svg:path>`,
})
export class SolarRocketBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocketBoldDuotoneIcon],svg[solar-rocket-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.447 16.377l5.847-5.83c.842-.839 1.263-1.259 1.484-1.792S22 7.627 22 6.44v-.567c0-1.826 0-2.739-.569-3.306S19.947 2 18.116 2h-.57c-1.19 0-1.785 0-2.32.221c-.536.221-.957.641-1.8 1.48L7.58 9.531c-.984.98-1.594 1.589-1.83 2.176a1.5 1.5 0 0 0-.112.562c0 .802.647 1.448 1.942 2.739l.174.173l2.038-2.069a.75.75 0 1 1 1.069 1.053L8.816 16.24l.137.137c1.295 1.29 1.943 1.936 2.747 1.936c.178 0 .348-.031.519-.094c.603-.222 1.219-.836 2.228-1.842m2.747-6.846a1.946 1.946 0 0 1-2.747 0a1.93 1.93 0 0 1 0-2.738a1.946 1.946 0 0 1 2.747 0a1.93 1.93 0 0 1 0 2.738" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.034 5.963L6.491 8.5c-.467.466-.896.893-1.235 1.28a6 6 0 0 0-.619.82l-.024-.025l-.095-.094a4.9 4.9 0 0 0-1.532-1.004l-.123-.05l-.379-.15a.764.764 0 0 1-.259-1.252C3.345 6.907 4.69 5.566 5.34 5.297a3.4 3.4 0 0 1 1.788-.229c.546.081 1.063.362 1.907.895m4.342 13.35c.205.208.34.355.464.512q.243.311.434.658c.142.26.253.537.474 1.092a.69.69 0 0 0 1.126.224l.084-.083c1.12-1.117 2.465-2.458 2.735-3.105a3.35 3.35 0 0 0 .229-1.782c-.081-.545-.362-1.06-.897-1.902l-2.552 2.544c-.478.477-.916.914-1.313 1.256c-.237.206-.497.41-.784.586" opacity=".5"></svg:path>`,
})
export class SolarRocketBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocketBrokenIcon],svg[solar-rocket-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.58 15.008l.53-.531zm0-5.477L7.05 9zm6.867 6.846l.53.531zm-5.494 0l-.53.531zm2.747 1.936v.75zm8.594-7.765l-.53-.531zm-5.355-9.02a.75.75 0 0 0 .572 1.386zM7.737 15.16a.75.75 0 1 0 1.06 1.062zm3.12-.991a.75.75 0 1 0-1.06-1.063zm1.362 4.049l.26.704zm-6.47-6.512l-.695-.28zm7.28-6.55a.75.75 0 1 0-1.058-1.063zm6.735 4.86l-5.847 5.829l1.06 1.062l5.846-5.83zm-10.281 5.83l-1.374-1.37L7.05 15.54l1.374 1.37zM17.547 2.75h.569v-1.5h-.57zm3.703 3.123v.567h1.5v-.567zM18.116 2.75c.936 0 1.564.002 2.031.064c.446.06.633.163.755.284l1.059-1.062c-.447-.446-1.003-.626-1.614-.708c-.59-.08-1.337-.078-2.231-.078zm4.634 3.123c0-.892.002-1.636-.078-2.225c-.082-.611-.264-1.166-.711-1.612L20.9 3.098c.122.121.225.307.285.75c.063.466.064 1.09.064 2.025zM8.11 14.477c-.663-.66-1.105-1.104-1.391-1.478c-.273-.356-.331-.56-.331-.73h-1.5c0 .632.265 1.152.64 1.642c.361.472.89.997 1.522 1.628zm.314 2.431c.632.63 1.159 1.158 1.632 1.518c.492.374 1.013.637 1.644.637v-1.5c-.173 0-.378-.059-.735-.33c-.375-.286-.82-.727-1.482-1.387zm12.4-5.83c.798-.795 1.354-1.332 1.647-2.036l-1.385-.575c-.151.364-.436.667-1.322 1.55zm.426-4.638c0 1.249-.013 1.663-.164 2.027l1.385.575c.292-.704.28-1.476.28-2.602zm-3.703-5.19c-1.13 0-1.903-.013-2.608.278l.572 1.386c.366-.15.784-.164 2.036-.164zm-8.75 14.973l2.06-2.053l-1.06-1.063l-2.06 2.054zm5.12-.377c-.511.51-.896.893-1.226 1.178c-.332.287-.556.426-.731.491l.518 1.408c.428-.158.814-.436 1.193-.764s.808-.755 1.305-1.25zm-1.957 1.669a.7.7 0 0 1-.26.048v1.5q.404-.001.778-.14zM7.05 9c-.485.484-.904.901-1.23 1.272c-.324.37-.6.745-.766 1.156l1.392.56c.07-.177.216-.4.502-.727c.285-.325.663-.702 1.161-1.2zm-1.996 2.428a2.2 2.2 0 0 0-.166.841h1.5c0-.09.016-.179.058-.282zm3.055-1.366l4.92-4.906l-1.058-1.062L7.05 9z"></svg:path><svg:path fill="currentColor" d="m5.573 11.532l.53-.53V11zm4.347-4.11a.75.75 0 1 0 .811-1.261zm-.224-1.035l.406-.63zm-2.57-1.319l.11-.742zm-4.9 2.956l.529.53zm3.113-2.727l.288.692zm-2.476 4.13l-.276.697zm-.162.742a.75.75 0 0 0 .571-1.387zm-.217-.893l.277-.697zm2.735 2.962a.75.75 0 0 0 1.06-1.06zm.403-1.716a.75.75 0 1 0-1.059 1.062zm5.11-4.361l-.63-.405l-.812 1.261l.63.405zm-.63-.405c-.621-.4-1.123-.723-1.554-.956c-.442-.238-.855-.406-1.312-.474L7.017 5.81c.22.033.46.117.819.31c.368.2.814.485 1.454.897zM2.755 8.555a57 57 0 0 1 1.71-1.659c.27-.247.518-.46.73-.623c.223-.172.365-.256.432-.284l-.575-1.385c-.257.107-.527.291-.773.481c-.258.2-.54.442-.826.703c-.572.522-1.2 1.149-1.757 1.705zm4.481-4.229a4.13 4.13 0 0 0-2.184.278l.575 1.385a2.63 2.63 0 0 1 1.39-.179zM2.208 9.974l.379.15l.552-1.395l-.378-.15zm.379.15l.114.045l.571-1.387l-.133-.053zm-.891-2.631a1.514 1.514 0 0 0 .512 2.48l.553-1.394l-.007-.003l-.003-.008V8.56l.004-.005zm3.347 4.569l.176.176l1.06-1.06L6.105 11zm-.48-.478l.48.479L6.104 11l-.48-.48zM12.5 18.5l-.53.53l.035.034zm5.323-5.268a.75.75 0 0 0-1.259.815zm-.223 1.035l-.63.408zm1.322 2.562l.742-.11zm-2.964 4.887l-.53-.531zm2.735-3.105l-.692-.29zm-3.248 2.686a.75.75 0 1 0-1.393.555zm-2.917-1.774a.75.75 0 1 0 .989-1.128zm3.346 2.276l.53.532zm-3.125-4.11a.75.75 0 0 0-1.061 1.06zm3.815-3.642l.406.628l1.26-.816l-.407-.627zm-1.135 7.138l-.085.083l1.06 1.063l.084-.084zm1.541-6.51c.414.638.7 1.082.9 1.45c.194.357.278.596.31.814l1.484-.22c-.068-.457-.237-.87-.476-1.31c-.233-.43-.557-.93-.958-1.55zm-.482 7.572c.557-.556 1.186-1.183 1.71-1.753c.261-.285.505-.565.704-.822c.19-.246.376-.515.483-.772l-1.384-.578a2.3 2.3 0 0 1-.284.43a12 12 0 0 1-.625.728c-.497.541-1.1 1.143-1.663 1.705zm1.693-5.308c.067.456.007.934-.18 1.383l1.384.578c.29-.693.388-1.448.28-2.181zm-4.664 1.456l-.523-.459l-.989 1.128l.523.459zm1.828 2.873a.1.1 0 0 1 .028-.016l.022-.001l.024.012q.018.016.026.034l-1.393.555c.384.964 1.632 1.196 2.352.479zM13.03 17.97l-.281-.281l-1.061 1.06l.281.282zm.887-7.341a.75.75 0 1 0 1.06-1.063zm2.747-1.063a.75.75 0 0 0 1.059 1.063zm1.059-2.738a2.696 2.696 0 0 0-3.806 0l1.06 1.062a1.196 1.196 0 0 1 1.687 0zm-3.806 0a2.68 2.68 0 0 0 0 3.8l1.06-1.062a1.18 1.18 0 0 1 0-1.676zm3.806 3.8a2.68 2.68 0 0 0 0-3.8l-1.06 1.062a1.18 1.18 0 0 1 0 1.676z"></svg:path>`,
})
export class SolarRocketBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocketLineDuotoneIcon],svg[solar-rocket-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.58 15.008l.53-.531zm0-5.477L7.05 9zm6.867 6.846l-.53-.531zm-5.494 0l-.53.531zm2.747 1.936v.75zm8.594-7.765l.53.53zM13.427 3.7l.53.532zm-1.208 14.52l.26.704zm-6.47-6.512l.697.28zm14.015-1.69l-5.847 5.829l1.06 1.062l5.846-5.83zM9.483 15.846l-1.374-1.37L7.05 15.54l1.374 1.37zm-1.374-5.784l5.847-5.83l-1.059-1.062L7.05 9zm9.438-7.312h.569v-1.5h-.57zm3.703 3.123v.567h1.5v-.567zM18.116 2.75c.936 0 1.564.002 2.031.064c.446.06.633.163.755.284l1.059-1.062c-.447-.446-1.003-.626-1.614-.708c-.59-.08-1.337-.078-2.231-.078zm4.634 3.123c0-.892.002-1.636-.078-2.225c-.082-.611-.264-1.166-.711-1.612L20.9 3.098c.122.121.225.307.285.75c.063.466.064 1.09.064 2.025zM8.11 14.477c-.663-.66-1.105-1.104-1.391-1.478c-.273-.356-.331-.56-.331-.73h-1.5c0 .632.265 1.152.64 1.642c.361.472.89.997 1.522 1.628zm.314 2.431c.632.63 1.159 1.158 1.632 1.518c.492.374 1.013.637 1.644.637v-1.5c-.173 0-.378-.059-.735-.33c-.375-.286-.82-.727-1.482-1.387zm12.4-5.83c.798-.795 1.354-1.332 1.647-2.036l-1.385-.575c-.151.364-.436.667-1.322 1.55zm.426-4.638c0 1.249-.013 1.663-.164 2.027l1.385.575c.292-.704.28-1.476.28-2.602zm-7.294-2.207c.886-.883 1.19-1.168 1.556-1.319l-.573-1.386c-.705.291-1.243.846-2.042 1.642zm3.59-2.983c-1.129 0-1.902-.013-2.607.278l.572 1.386c.366-.15.784-.164 2.036-.164zm-3.629 14.596c-.511.51-.896.893-1.226 1.178c-.332.287-.556.426-.731.491l.518 1.408c.428-.158.814-.436 1.193-.764s.808-.755 1.305-1.25zm-1.957 1.669a.7.7 0 0 1-.26.048v1.5q.404-.001.778-.14zM7.05 9c-.485.484-.904.901-1.23 1.272c-.324.37-.6.745-.766 1.156l1.392.56c.07-.177.216-.4.502-.727c.285-.325.663-.702 1.161-1.2zm-1.996 2.428a2.2 2.2 0 0 0-.166.841h1.5c0-.09.016-.179.058-.282z"></svg:path><svg:path fill="currentColor" d="m5.573 11.532l.53-.53V11zm4.347-4.11a.75.75 0 0 0 .811-1.261zm-.224-1.035l.406-.63zm-2.57-1.319l.11-.742zm-4.9 2.956l.529.53zm3.113-2.727l.288.692zm-2.476 4.13l-.276.697zm.123.049l.286-.694zm1.627 1.098l.53-.531zm-.095-.094l-.522.539zM2.484 9.276l.277-.697zM12.5 18.5l-.53.53l.036.034zm5.324-5.268a.75.75 0 1 0-1.26.816zm-.224 1.035l-.63.408zm1.323 2.562l.742-.11zm-2.964 4.887l.53.531zm2.735-3.105l.692.289zm-3.945 2.964l.697-.278zm-.474-1.092l.657-.36zm-1.252-1.524l.53-.531l-.018-.017l-.018-.016zm.818.866l.59-.462zm2.034 1.975l-.53-.531zM10.73 6.16l-.629-.405l-.812 1.261l.63.405zm-.629-.405c-.621-.4-1.123-.723-1.554-.956c-.442-.238-.855-.406-1.312-.474L7.017 5.81c.22.033.46.117.819.31c.368.2.814.485 1.454.897zm-7.346 2.8a57 57 0 0 1 1.71-1.659c.27-.247.518-.46.73-.623c.223-.172.365-.256.432-.284l-.575-1.385c-.257.107-.527.291-.773.481c-.258.2-.54.442-.826.703c-.572.522-1.2 1.149-1.757 1.705zm4.481-4.229a4.13 4.13 0 0 0-2.184.278l.575 1.385a2.63 2.63 0 0 1 1.39-.179zM2.208 9.974l.379.15l.552-1.395l-.378-.15zm1.875 1.13l.96.959L6.104 11l-.96-.958zm-1.496-.98l.114.045l.571-1.387l-.133-.053zm2.555-.081l-.101-.1l-1.045 1.076c.02.018.039.038.087.086zm-2.441.126a4.1 4.1 0 0 1 1.295.85l1.045-1.077a5.6 5.6 0 0 0-1.769-1.16zM1.696 7.493a1.514 1.514 0 0 0 .512 2.48l.553-1.394l-.007-.004l-.003-.007V8.56l.004-.005zm14.869 6.554l.406.628l1.259-.815l-.406-.628zm-1.136 7.138l-.084.084l1.06 1.062l.083-.084zm1.542-6.51c.414.639.7 1.082.9 1.45c.193.358.278.597.31.814l1.484-.22c-.068-.457-.238-.87-.476-1.31c-.233-.43-.558-.93-.959-1.55zm-.483 7.572a58 58 0 0 0 1.71-1.753c.261-.285.505-.565.705-.822c.19-.246.376-.515.483-.772l-1.384-.578a2.3 2.3 0 0 1-.285.43c-.163.212-.376.458-.624.728c-.497.541-1.1 1.143-1.664 1.705zm1.693-5.308c.068.456.008.935-.18 1.383l1.385.578a4.1 4.1 0 0 0 .279-2.181zm-4.664 1.456l-.523-.459l-.988 1.128l.522.459zm1.929 2.902c-.215-.538-.344-.865-.514-1.175l-1.315.722c.116.21.208.438.435 1.009zm-2.953-1.807c.436.434.61.61.758.798l1.18-.925c-.217-.278-.467-.526-.879-.935zm2.44.633a5.6 5.6 0 0 0-.502-.76l-1.18.925q.206.263.366.556zm.412 1.146a.1.1 0 0 1 .028-.016l.023-.002l.024.012q.018.016.026.034l-1.394.556c.384.963 1.632 1.196 2.352.478zM13.03 17.97l-.28-.281l-1.062 1.06l.282.282zm-7.987-5.908l.176.176l1.06-1.06L6.105 11zm5.813 2.108a.75.75 0 0 0-1.059-1.062zm-2.06 2.054l2.06-2.054l-1.059-1.062l-2.06 2.054zM16.664 9a1.196 1.196 0 0 1-1.688 0l-1.059 1.062a2.696 2.696 0 0 0 3.806 0zm-1.688 0a1.18 1.18 0 0 1 0-1.676l-1.059-1.062a2.68 2.68 0 0 0 0 3.8zm0-1.676a1.196 1.196 0 0 1 1.688 0l1.059-1.062a2.696 2.696 0 0 0-3.806 0zm1.688 0a1.18 1.18 0 0 1 0 1.676l1.059 1.062a2.68 2.68 0 0 0 0-3.8z" opacity=".5"></svg:path>`,
})
export class SolarRocketLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocketLinearIcon],svg[solar-rocket-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.58 15.008l.53-.531zm0-5.477L7.05 9zm6.867 6.846l-.53-.531zm-5.494 0l-.53.531zm2.747 1.936v.75zm8.593-7.765l.53.53zM13.427 3.7l.53.532zm-2.571 10.47a.75.75 0 1 0-1.059-1.063zm-5.283-2.64l.53-.53zM9.92 7.422a.75.75 0 0 0 .811-1.261zm-.224-1.036l.406-.63zm-2.57-1.318l.11-.742zm-4.9 2.955l.529.531zm3.113-2.727l.288.693zm-2.476 4.13l-.276.697zm.123.05l.286-.694zm1.627 1.097l.53-.53zm-.095-.093l-.522.538zM2.484 9.276l.277-.697zM12.5 18.5l-.53.53l.036.034zm5.324-5.268a.75.75 0 1 0-1.26.815zm-.224 1.035l-.63.408zm1.323 2.562l.742-.11zm-2.964 4.886l.53.532zm2.735-3.104l.692.288zm-3.945 2.964l.697-.278zm-.474-1.092l.657-.36zm-1.252-1.525l.53-.53l-.018-.018l-.018-.015zm.818.867l.59-.463zm2.034 1.974l-.53-.53zM5.75 11.708l.695.28zm14.014-1.691l-5.847 5.829l1.06 1.062l5.846-5.83zM9.483 15.846l-1.374-1.37L7.05 15.54l1.374 1.37zm-1.374-5.784l5.847-5.83l-1.059-1.062L7.05 9zm9.438-7.312h.569v-1.5h-.57zm3.703 3.123v.567h1.5v-.567zM18.116 2.75c.936 0 1.564.002 2.031.064c.446.06.633.163.755.284l1.059-1.062c-.447-.446-1.003-.626-1.615-.708c-.59-.08-1.336-.078-2.23-.078zm4.634 3.123c0-.892.002-1.636-.078-2.225c-.082-.611-.264-1.166-.711-1.612L20.9 3.098c.122.121.225.307.285.75c.062.466.064 1.09.064 2.025zM8.11 14.477c-.663-.66-1.105-1.104-1.391-1.478c-.273-.356-.331-.56-.331-.73h-1.5c0 .632.265 1.152.64 1.642c.361.472.89.997 1.522 1.628zm.314 2.431c.632.63 1.159 1.158 1.632 1.518c.491.374 1.012.637 1.644.637v-1.5c-.173 0-.378-.059-.736-.33c-.374-.286-.819-.727-1.481-1.387zm12.399-5.83c.799-.795 1.355-1.332 1.648-2.036l-1.385-.575c-.151.364-.437.667-1.322 1.55zm.427-4.638c0 1.249-.013 1.663-.164 2.027l1.385.575c.292-.704.279-1.476.279-2.602zm-7.294-2.207c.885-.883 1.19-1.168 1.555-1.319l-.572-1.386c-.705.291-1.243.846-2.042 1.642zm3.59-2.983c-1.13 0-1.902-.013-2.607.278l.572 1.386c.366-.15.784-.164 2.036-.164zm-8.75 14.973l2.06-2.053l-1.059-1.063l-2.06 2.054zm1.935-10.062l-.629-.405l-.812 1.261l.63.405zm-.629-.405c-.621-.4-1.123-.724-1.554-.956c-.442-.238-.855-.407-1.312-.474L7.017 5.81c.22.032.46.117.819.31c.368.199.814.485 1.454.897zM2.755 8.554a57 57 0 0 1 1.71-1.658a12 12 0 0 1 .73-.623c.223-.172.365-.256.432-.284l-.575-1.386c-.257.107-.527.292-.773.482c-.258.199-.54.442-.826.703c-.572.522-1.2 1.149-1.757 1.704zm4.481-4.228a4.13 4.13 0 0 0-2.184.277l.575 1.386a2.63 2.63 0 0 1 1.39-.18zM2.208 9.973l.379.15l.552-1.394l-.378-.15zm1.875 1.131l.96.958L6.104 11l-.96-.958zm-1.496-.98l.114.045l.571-1.387l-.133-.053zm2.555-.082l-.101-.1l-1.045 1.076l.087.086zm-2.441.127c.482.198.921.487 1.295.85l1.045-1.077a5.6 5.6 0 0 0-1.769-1.16zM1.696 7.492a1.514 1.514 0 0 0 .512 2.481l.553-1.394l-.007-.004l-.003-.008V8.56l.004-.006zm14.869 6.555l.406.627l1.259-.815l-.406-.627zm-1.136 7.137l-.084.084l1.06 1.062l.083-.083zm1.542-6.51c.414.64.7 1.083.9 1.45c.193.358.278.597.31.815l1.484-.22c-.068-.457-.238-.87-.476-1.31c-.233-.43-.558-.93-.959-1.55zm-.483 7.573c.557-.556 1.186-1.183 1.71-1.753c.261-.285.505-.566.705-.823c.19-.245.376-.514.483-.771l-1.384-.578a2.3 2.3 0 0 1-.285.43a12 12 0 0 1-.624.728a57 57 0 0 1-1.664 1.704zm1.693-5.308c.068.456.008.934-.18 1.383l1.385.578a4.1 4.1 0 0 0 .279-2.182zm-4.664 1.456l-.523-.459l-.988 1.128l.522.458zm1.929 2.902c-.215-.539-.344-.866-.514-1.175l-1.315.721c.116.21.208.438.435 1.01zm-2.953-1.807c.436.434.61.609.758.798l1.18-.926c-.217-.277-.467-.525-.879-.935zm2.44.632a5.6 5.6 0 0 0-.502-.76l-1.18.926q.206.262.366.555zM16.662 9a1.196 1.196 0 0 1-1.687 0l-1.059 1.062a2.696 2.696 0 0 0 3.806 0zm-1.687 0a1.18 1.18 0 0 1 0-1.677l-1.059-1.062a2.68 2.68 0 0 0 0 3.8zm0-1.677a1.196 1.196 0 0 1 1.688 0l1.059-1.062a2.696 2.696 0 0 0-3.806 0zm1.688 0a1.18 1.18 0 0 1 0 1.677l1.059 1.062a2.68 2.68 0 0 0 0-3.8zm-1.319 13.945a.1.1 0 0 1 .028-.016l.023-.001l.024.012q.018.015.026.034l-1.394.555c.384.963 1.632 1.196 2.352.478zm-1.428-5.422c-.511.51-.896.893-1.227 1.178c-.331.287-.555.426-.73.491l.518 1.408c.428-.158.814-.436 1.193-.764s.808-.755 1.305-1.25zm-1.957 1.669a.7.7 0 0 1-.26.048v1.5q.404-.001.778-.14zm1.07.455l-.28-.281l-1.062 1.06l.282.281zM7.05 9c-.485.484-.904.901-1.23 1.272c-.324.37-.601.745-.766 1.156l1.391.56c.071-.177.217-.4.503-.727c.285-.325.663-.702 1.161-1.2zm-1.996 2.428a2.2 2.2 0 0 0-.166.841h1.5c0-.09.016-.179.057-.282zm-.011.634l.176.176l1.06-1.06L6.105 11z"></svg:path>`,
})
export class SolarRocketLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocketOutlineIcon],svg[solar-rocket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.406 1.25h.761c.872 0 1.6 0 2.18.078c.61.082 1.166.262 1.613.708s.63 1.001.712 1.612c.078.578.078 1.304.078 2.173v.76c0 1.05 0 1.787-.28 2.461s-.802 1.195-1.547 1.937l-.1.1l-2.67 2.662l.093.143c.394.608.713 1.1.943 1.525c.238.44.408.853.476 1.31a4.1 4.1 0 0 1-.28 2.18c-.107.258-.292.527-.482.772c-.2.258-.444.538-.706.823a58 58 0 0 1-1.702 1.746l-.091.09c-.72.718-1.968.486-2.352-.477c-.227-.572-.32-.8-.435-1.01a4 4 0 0 0-.367-.555c-.146-.187-.316-.36-.74-.781l-.505-.443l-.02-.019a2 2 0 0 1-.285.018c-.632 0-1.153-.263-1.644-.637c-.464-.353-.98-.867-1.596-1.481l-1.447-1.443c-.616-.614-1.131-1.128-1.486-1.591c-.374-.49-.64-1.01-.64-1.642q.001-.17.026-.337l-.83-.827l-.087-.087a4.1 4.1 0 0 0-1.41-.895l-.378-.15a1.514 1.514 0 0 1-.513-2.48l.007-.008a59 59 0 0 1 1.751-1.697c.287-.261.568-.504.825-.703c.247-.19.517-.375.774-.481a4.13 4.13 0 0 1 2.184-.278c.457.067.87.236 1.311.474c.426.23.92.547 1.53.94l.148.095l2.672-2.665l.1-.099c.744-.743 1.266-1.264 1.942-1.543s1.413-.278 2.467-.278M9.137 6.919c-.56-.36-.963-.616-1.301-.799c-.36-.193-.6-.278-.82-.31a2.63 2.63 0 0 0-1.39.179a2.4 2.4 0 0 0-.432.284c-.212.163-.459.376-.73.623a57 57 0 0 0-1.71 1.658l-.004.006v.007l.003.008l.008.004l.383.152l.128.051a5.6 5.6 0 0 1 1.768 1.16c.028.026.055.053.098.097l.478.476q.098-.122.204-.242c.322-.368.735-.78 1.214-1.257zm4.317 11.42l.081.071l.052.052c.39.39.633.63.844.9q.281.36.501.76c.16.291.284.598.477 1.083l.02-.02a57 57 0 0 0 1.663-1.705c.248-.27.462-.517.625-.728a2.3 2.3 0 0 0 .285-.43a2.6 2.6 0 0 0 .179-1.383c-.032-.218-.117-.457-.31-.815c-.184-.338-.441-.74-.804-1.3l-2.109 2.102c-.49.488-.912.909-1.287 1.233a8 8 0 0 1-.217.18M17.547 2.75c-1.252 0-1.67.013-2.036.164c-.365.151-.67.436-1.555 1.319l-5.847 5.829c-.498.497-.876.874-1.16 1.2c-.287.325-.433.549-.504.725a.7.7 0 0 0-.058.282c0 .17.059.374.332.73c.285.374.728.817 1.39 1.478l.157.156l1.53-1.526a.75.75 0 0 1 1.06 1.063l-1.527 1.522l.153.154c.663.66 1.107 1.101 1.482 1.386c.358.272.563.331.736.331a.7.7 0 0 0 .26-.048c.175-.064.398-.204.73-.49c.33-.286.716-.67 1.227-1.18l5.847-5.828c.885-.883 1.17-1.186 1.321-1.55s.165-.778.165-2.027v-.567c0-.934-.002-1.56-.065-2.025c-.06-.443-.162-.629-.284-.75s-.308-.224-.754-.284c-.468-.062-1.095-.064-2.032-.064zm-.884 4.574a1.196 1.196 0 0 0-1.687 0a1.18 1.18 0 0 0 0 1.676a1.196 1.196 0 0 0 1.687 0a1.18 1.18 0 0 0 0-1.676M13.917 6.26a2.696 2.696 0 0 1 3.806 0a2.68 2.68 0 0 1 0 3.801a2.696 2.696 0 0 1-3.806 0a2.68 2.68 0 0 1 0-3.8" clip-rule="evenodd"></svg:path>`,
})
export class SolarRocketOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRollingPinBoldIcon],svg[solar-rolling-pin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.157 17.013l3.855-3.856c1.454-1.454 2.182-2.181 2.182-3.085c0-.605-.327-1.131-.98-1.85a38 38 0 0 0-1.202-1.234c-.48-.48-.88-.881-1.234-1.203c-.719-.652-1.245-.979-1.85-.979c-.904 0-1.63.727-3.085 2.182l-3.856 3.855c-1.454 1.454-2.18 2.182-2.18 3.085c0 .605.326 1.131.978 1.85c.322.354.722.755 1.202 1.235s.88.88 1.235 1.202c.718.652 1.245.979 1.85.979c.903 0 1.63-.727 3.085-2.181m7.909-14.451c.041.037.09.086.188.184s.147.147.184.188a2.18 2.18 0 0 1-.262 3.17c-.044.034-.1.074-.213.155l-1.52 1.086l-.118-.132a39 39 0 0 0-1.232-1.266l-.04-.04a39 39 0 0 0-1.267-1.232l-.13-.118l1.085-1.52c.08-.113.12-.169.155-.213a2.18 2.18 0 0 1 3.17-.262M4.557 16.655l.118.131c.346.381.768.803 1.231 1.267l.041.04c.463.464.886.886 1.266 1.232l.132.118l-1.086 1.52a4 4 0 0 1-.156.213a2.18 2.18 0 0 1-3.169.262a6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.18 2.18 0 0 1 .262-3.17c.044-.034.1-.075.213-.155z"></svg:path>`,
})
export class SolarRollingPinBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRollingPinBoldDuotoneIcon],svg[solar-rolling-pin-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.157 17.013l3.856-3.856c1.454-1.454 2.181-2.181 2.181-3.085c0-.605-.326-1.131-.98-1.85a38 38 0 0 0-1.201-1.234c-.48-.48-.88-.881-1.235-1.203c-.718-.652-1.245-.979-1.85-.979c-.903 0-1.63.727-3.084 2.182l-3.856 3.855c-1.454 1.454-2.181 2.182-2.181 3.085c0 .605.326 1.131.979 1.85c.321.354.722.755 1.202 1.235s.88.88 1.234 1.202c.719.652 1.245.979 1.85.979c.904 0 1.63-.727 3.085-2.181"></svg:path><svg:path fill="currentColor" d="M21.254 2.746c-.098-.098-.147-.147-.188-.184a2.18 2.18 0 0 0-3.17.262a6 6 0 0 0-.155.213l-1.963 2.748c.354.322.755.723 1.234 1.202c.48.48.881.881 1.203 1.235l2.748-1.963c.113-.08.169-.12.213-.156a2.18 2.18 0 0 0 .262-3.169a6 6 0 0 0-.184-.188M2.562 21.066c.037.041.086.09.184.188s.147.147.188.184a2.18 2.18 0 0 0 3.17-.262c.034-.044.074-.1.155-.213l1.963-2.748a38 38 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234l-2.748 1.963a6 6 0 0 0-.213.155a2.18 2.18 0 0 0-.262 3.17" opacity=".5"></svg:path>`,
})
export class SolarRollingPinBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRollingPinBrokenIcon],svg[solar-rolling-pin-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M17.013 13.157c1.454-1.454 2.18-2.181 2.18-3.085c0-.605-.326-1.131-.978-1.85m-9.993 9.993l-1.963 2.748a4 4 0 0 1-.156.213a2.18 2.18 0 0 1-3.169.262a6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188A2.18 2.18 0 0 1 2.085 19m6.137-.785a38 38 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234m2.437 2.437c.719.652 1.245.979 1.85.979c.904 0 1.63-.727 3.085-2.181l.843-.844m-8.215-.391c-.652-.719-.979-1.245-.979-1.85c0-.904.727-1.63 2.182-3.085l3.855-3.855c1.454-1.455 2.181-2.182 3.085-2.182c.605 0 1.131.327 1.85.98m-9.993 9.992l-1.374.982m13.804-8.538l2.748-1.963c.113-.08.169-.12.213-.156a2.18 2.18 0 0 0 .262-3.169a6 6 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.18 2.18 0 0 0-3.17.262a6 6 0 0 0-.155.213l-1.963 2.748m2.437 2.437a38 38 0 0 0-1.203-1.234c-.48-.48-.88-.881-1.234-1.203"></svg:path>`,
})
export class SolarRollingPinBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRollingPinLineDuotoneIcon],svg[solar-rolling-pin-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m13.157 17.013l3.856-3.856c1.454-1.454 2.18-2.181 2.18-3.085c0-.605-.326-1.131-.978-1.85c-.322-.354-.723-.755-1.202-1.234c-.48-.48-.881-.881-1.235-1.203c-.719-.652-1.245-.979-1.85-.979c-.904 0-1.63.727-3.085 2.182l-3.855 3.855c-1.455 1.454-2.182 2.182-2.182 3.085c0 .605.327 1.131.98 1.85c.321.354.722.755 1.202 1.235s.88.88 1.234 1.202c.719.652 1.245.979 1.85.979c.904 0 1.63-.727 3.085-2.181Z"></svg:path><svg:path d="m8.222 18.215l-1.963 2.748a4 4 0 0 1-.156.213a2.18 2.18 0 0 1-3.169.262a6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.18 2.18 0 0 1 .262-3.17c.044-.034.1-.075.213-.155l2.748-1.963m12.43-7.556l2.748-1.963c.113-.08.169-.12.213-.156a2.18 2.18 0 0 0 .262-3.169a6 6 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.18 2.18 0 0 0-3.17.262a6 6 0 0 0-.155.213l-1.963 2.748" opacity=".5"></svg:path></svg:g>`,
})
export class SolarRollingPinLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRollingPinLinearIcon],svg[solar-rolling-pin-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m8.222 18.215l-1.963 2.748a4 4 0 0 1-.156.213a2.18 2.18 0 0 1-3.169.262a6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.18 2.18 0 0 1 .262-3.17c.044-.034.1-.075.213-.155l2.748-1.963m2.437 2.437a38 38 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234m2.437 2.437c.719.652 1.245.979 1.85.979c.904 0 1.63-.727 3.085-2.181l3.855-3.856c1.455-1.454 2.182-2.181 2.182-3.085c0-.605-.327-1.131-.98-1.85M5.786 15.778c-.652-.719-.979-1.245-.979-1.85c0-.904.727-1.63 2.182-3.085l3.855-3.855c1.454-1.455 2.181-2.182 3.085-2.182c.605 0 1.131.327 1.85.98m2.437 2.436l2.748-1.963c.113-.08.169-.12.213-.156a2.18 2.18 0 0 0 .262-3.169a6 6 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.18 2.18 0 0 0-3.17.262a6 6 0 0 0-.155.213l-1.963 2.748m2.437 2.437a38 38 0 0 0-1.203-1.234c-.48-.48-.88-.881-1.234-1.203"></svg:path>`,
})
export class SolarRollingPinLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRollingPinOutlineIcon],svg[solar-rolling-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.31 2.358a2.93 2.93 0 0 1 4.258-.353c.056.05.118.113.201.196l.03.03c.083.083.145.145.196.2a2.93 2.93 0 0 1-.353 4.26c-.059.047-.13.097-.226.166l-2.11 1.507c.384.522.638 1.066.638 1.708c0 .682-.285 1.248-.7 1.79c-.394.518-.969 1.092-1.664 1.788l-3.93 3.93c-.696.696-1.27 1.27-1.787 1.665c-.543.414-1.11.699-1.79.699c-.643 0-1.187-.254-1.71-.637l-1.506 2.11c-.069.095-.12.166-.166.225a2.93 2.93 0 0 1-4.26.353c-.055-.05-.117-.113-.2-.196l-.03-.03c-.083-.083-.145-.145-.196-.2a2.93 2.93 0 0 1 .353-4.26c.059-.047.13-.098.226-.166l2.11-1.507c-.384-.522-.638-1.065-.638-1.708c0-.682.285-1.248.7-1.79c.394-.518.969-1.092 1.664-1.788l3.93-3.93c.696-.695 1.27-1.27 1.787-1.665c.543-.414 1.11-.699 1.79-.699c.643 0 1.187.254 1.71.637l1.506-2.11c.069-.095.12-.166.166-.225m-.542 3.331q.354.346.764.757l.022.022q.41.41.757.764l2.216-1.584c.12-.086.157-.112.182-.132a1.43 1.43 0 0 0 .172-2.08a6 6 0 0 0-.157-.16a5 5 0 0 0-.16-.157a1.43 1.43 0 0 0-2.08.172a5 5 0 0 0-.132.182zM5.69 16.77l-2.216 1.583a5 5 0 0 0-.182.132a1.43 1.43 0 0 0-.172 2.08c.021.023.053.055.157.16c.105.104.137.136.16.157a1.43 1.43 0 0 0 2.08-.172c.02-.025.046-.061.132-.182l1.584-2.216a77 77 0 0 1-.764-.757l-.022-.022q-.41-.41-.757-.764m7.358-10.821c-.427.326-.931.828-1.673 1.57l-3.856 3.856c-.742.742-1.244 1.246-1.57 1.673c-.313.41-.392.66-.392.88c0 .302.145.642.785 1.347c.306.338.693.724 1.177 1.208s.87.87 1.208 1.177c.705.64 1.045.785 1.346.785c.222 0 .471-.08.881-.392c.427-.326.931-.828 1.673-1.57l3.856-3.856c.742-.742 1.244-1.246 1.57-1.673c.313-.41.392-.66.392-.88c0-.302-.145-.642-.785-1.347a38 38 0 0 0-1.177-1.208c-.484-.484-.87-.87-1.208-1.177c-.705-.64-1.045-.785-1.346-.785c-.222 0-.471.08-.881.392" clip-rule="evenodd"></svg:path>`,
})
export class SolarRollingPinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownBoldIcon],svg[solar-round-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m3.53-12.03a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 12.44l2.47-2.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownBoldDuotoneIcon],svg[solar-round-alt-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.53 11.03a.75.75 0 1 0-1.06-1.06L12 12.44L9.53 9.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class SolarRoundAltArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownBrokenIcon],svg[solar-round-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 10.5l-3 3l-3-3"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarRoundAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownLineDuotoneIcon],svg[solar-round-alt-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 10.5l-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarRoundAltArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownLinearIcon],svg[solar-round-alt-arrow-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 10.5l-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarRoundAltArrowDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownOutlineIcon],svg[solar-round-alt-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m7.22-2.03a.75.75 0 0 1 1.06 0L12 12.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundAltArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowLeftBoldIcon],svg[solar-round-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.03-13.53a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowLeftBoldDuotoneIcon],svg[solar-round-alt-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.97 8.47a.75.75 0 1 1 1.06 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z"></svg:path>`,
})
export class SolarRoundAltArrowLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
